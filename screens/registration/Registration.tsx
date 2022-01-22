import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Registration.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../globalStyles';
import { register } from '../../apiService/loginFlow';
import { determineAstrologicalSign } from './utils';
import { Context } from '../../Context';
import { getReadingsByUser } from '../../apiService/data';
import AppLoading from '../AppLoading/AppLoading';
import { TextInputMask } from 'react-native-masked-text';
import { BasicModal } from '../../components/Modal/BasicModal';

const Registration: React.FC = () => {
  const navigation = useNavigation();
  const context = useContext(Context);

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    passwordCheck: '',
    birthdate: '',
  });

  const signUpHandler = async () => {
    if (
      formData.email.length < 1 ||
      formData.name.length < 1 ||
      formData.birthdate.length < 1
    ) {
      context.setModalText('Please fill in all required fields.');
      context.setModalOpen(true);
      return;
    }

    if (formData.password.length < 6) {
      context.setModalText(
        'Please choose a password of at least 6 characters.'
      );
      context.setModalOpen(true);
      return;
    }

    if (formData.password !== formData.passwordCheck) {
      context.setModalText('Please make sure your passwords match.');
      context.setModalOpen(true);
      return;
    }

    const userForm = {
      email: formData.email.toLowerCase(),
      name: formData.name,
      birthdate: formData.birthdate,
      password: formData.password,
      sign: determineAstrologicalSign(formData.birthdate),
      dateJoined: Date.now().toString(),
    };
    context.setIsLoading(true);
    const res = await register(userForm);
    const { user } = res;
    context.setCurrentUser(user);
    context.setIsAuthenticated(true);
    context.setIsLoading(false);
    const readings = await getReadingsByUser(user._id);
    context.setReadings(readings);
  };

  if (!context.isLoading) {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.screenContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={-10}
        >
          <BasicModal
            animationType='none'
            transparent={true}
            visible={context.modalOpen}
            onRequestClose={() => {
              context.setModalOpen(!context.modalOpen);
            }}
            modalText={context.modalText}
          />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Let's get started!</Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder='Email'
              placeholderTextColor={COLORS.parchment}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              autoCapitalize='none'
            />
            <TextInput
              style={styles.input}
              placeholder='Nickname'
              placeholderTextColor={COLORS.parchment}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
            <View style={styles.passwordForm}>
              <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor={COLORS.parchment}
                onChangeText={(text) =>
                  setFormData({ ...formData, password: text })
                }
                autoCapitalize='none'
              />
              {formData.password.length >= 6 && (
                <View style={styles.icon}>
                  <FontAwesomeIcon
                    color={COLORS.parchment}
                    size={25}
                    icon={faCheckCircle}
                  />
                </View>
              )}
            </View>
            <View style={styles.passwordForm}>
              <TextInput
                style={styles.input}
                placeholder='Confirm Password'
                secureTextEntry={true}
                placeholderTextColor={COLORS.parchment}
                onChangeText={(text) =>
                  setFormData({ ...formData, passwordCheck: text })
                }
                autoCapitalize='none'
              />
              {formData.passwordCheck === formData.password &&
                formData.password.length >= 6 && (
                  <View style={styles.icon}>
                    <FontAwesomeIcon
                      color={COLORS.parchment}
                      size={25}
                      icon={faCheckCircle}
                    />
                  </View>
                )}
            </View>
            <TextInputMask
              type={'datetime'}
              options={{
                format: 'MM/DD',
              }}
              style={styles.input}
              keyboardType='numeric'
              placeholder='Birthday (mm/dd)'
              value={formData.birthdate}
              placeholderTextColor={COLORS.parchment}
              onChangeText={(text) => {
                setFormData({ ...formData, birthdate: text });
              }}
            />
            <TouchableOpacity
              onPress={signUpHandler}
              style={styles.basicButton}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.rerouteText}>Prefer to log in?</Text>
              <Text style={styles.rerouteText}>Sign in here.</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }

  return <AppLoading />;
};

export default Registration;
