import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from './ForgotPassword.style';
import { COLORS } from '../../globalStyles';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../Context';
import AppLoading from '../AppLoading/AppLoading';
import { BasicModal } from '../../components/Modal/BasicModal';

const ForgotPassword: React.FC = () => {
  const navigation = useNavigation();
  const context = useContext(Context);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  if (!context.isLoading) {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={-64}
          style={styles.screenContainer}
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
            <Text style={styles.header}>Divination awaits!</Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput
              placeholder='Email'
              placeholderTextColor={COLORS.parchment}
              onChangeText={(text) =>
                setLoginData({ ...loginData, email: text })
              }
              style={styles.input}
              autoCapitalize='none'
              keyboardType='email-address'
            />
            <TextInput
              placeholder='Password'
              placeholderTextColor={COLORS.parchment}
              onChangeText={(text) =>
                setLoginData({ ...loginData, password: text })
              }
              style={styles.input}
              secureTextEntry={true}
              autoCapitalize='none'
            />
            <TouchableOpacity
              style={styles.basicButton}
              onPress={loginButtonHandler}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.centeredTextContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Registration')}
            >
              <Text style={styles.rerouteTextPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <Text style={styles.rerouteText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Registration')}
            >
              <Text style={styles.rerouteText}> Sign up here.</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }

  return <AppLoading />;
};

export default ForgotPassword;
