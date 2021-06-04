import React, { useState } from 'react';
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
import styles from './Registration.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../globalStyles';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    passwordCheck: '',
    birthdate: '',
  });

  const signUpHandler = () => {
    if (
      formData.email.length < 1 ||
      formData.name.length < 1 ||
      formData.birthdate.length < 1
    ) {
      Alert.alert('Try again!', 'Please fill in all required fields.');
    }
    if (formData.password.length < 6) {
      Alert.alert(
        'Try again!',
        'Please choose a password with at least 6 characters.'
      );
    }
    if (formData.password !== formData.passwordCheck) {
      Alert.alert('Try again!', 'Please make sure your passwords match.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.screenContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={-10}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Let's get started!</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='gray'
            onChangeText={(text) => setFormData({ ...formData, email: text })}
          />
          <TextInput
            style={styles.input}
            placeholder='Nickname'
            placeholderTextColor='gray'
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />
          <View style={styles.passwordForm}>
            <TextInput
              style={styles.input}
              placeholder='Password'
              secureTextEntry={true}
              placeholderTextColor='gray'
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
              }
            />
            {formData.password.length >= 6 && (
              <View style={styles.icon}>
                <FontAwesomeIcon
                  color={COLORS.lavenderBlue}
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
              placeholderTextColor='gray'
              onChangeText={(text) =>
                setFormData({ ...formData, passwordCheck: text })
              }
            />
            {formData.passwordCheck === formData.password &&
              formData.password.length >= 6 && (
                <View style={styles.icon}>
                  <FontAwesomeIcon
                    color={COLORS.lavenderBlue}
                    size={25}
                    icon={faCheckCircle}
                  />
                </View>
              )}
          </View>
          <TextInput
            style={styles.input}
            placeholder='Birthday (mm/dd)'
            placeholderTextColor='gray'
            onChangeText={(text) =>
              setFormData({ ...formData, birthdate: text })
            }
          />
          <TouchableOpacity onPress={signUpHandler} style={styles.basicButton}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Registration;
