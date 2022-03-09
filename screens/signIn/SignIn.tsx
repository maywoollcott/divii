import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Button,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { styles } from './SignIn.style';
import { COLORS } from '../../globalStyles';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Context } from '../../Context';
import { getUserByToken, login } from '../../apiService/loginFlow';
import { getReadingsByUser } from '../../apiService/data';
import AppLoading from '../AppLoading/AppLoading';
import { loginResponse } from '../../types';
import { BasicModal } from '../../components/Modal/BasicModal';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const context = useContext(Context);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const isFocused = useIsFocused();

  const isAuthenticatedCheck = async () => {
    let token = await SecureStore.getItemAsync('DIVII_TOKEN_AUTH');
    if (token !== null) {
      try {
        context.setIsLoading(true);
        const res: loginResponse = await getUserByToken(token);
        console.log(res);
        if (res.status === 200) {
          const { user } = res;
          context.setIsAuthenticated(true);
          context.setCurrentUser(user);
          const readings = await getReadingsByUser(user._id);
          context.setReadings(readings);
          context.setIsLoading(false);
        } else {
          if (res.message) {
            context.setModalText(res.message);
            context.setModalOpen(true);
          }
          context.setIsLoading(false);
        }
      } catch (err: any) {
        context.setModalText('Network error. Please check your internet connection.');
        context.setModalOpen(true);
        context.setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    isAuthenticatedCheck();
  }, [isFocused]);

  const loginButtonHandler = async () => {
    Keyboard.dismiss();
    try {
      context.setIsLoading(true);
      const res: loginResponse = await login(loginData.email.toLowerCase(), loginData.password);
      if (res.status === 200) {
        const { user, token } = res;
        if (token) {
          await SecureStore.setItemAsync('DIVII_TOKEN_AUTH', token);
        }
        context.setIsAuthenticated(true);
        context.setCurrentUser(user);
        const readings = await getReadingsByUser(user._id);
        context.setReadings(readings);
        context.setIsLoading(false);
      } else if (res.status === 409) {
        //no user exists
        if (res.message) {
          context.setModalText(res.message);
          context.setModalOpen(true);
          console.log(res.message);
        }
        setTimeout(() => {
          context.setIsLoading(false);
        }, 1000);
      } else if (res.status === 400) {
        //wrong password
        if (res.message) {
          context.setModalText(res.message);
          context.setModalOpen(true);
          console.log(res.message);
        }
        context.setIsLoading(false);
      } else {
        //network connection
        if (res.message) {
          context.setModalText(res.message);
          context.setModalOpen(true);
          console.log(res.message);
        }
        context.setIsLoading(false);
      }
    } catch (err: any) {
      context.setModalText('Network error. Please check your internet connection.');
      context.setModalOpen(true);
      context.setIsLoading(false);
      console.log(err);
    }
  };

  if (context.isLoading) {
    return <AppLoading />;
  }

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
            onChangeText={(text) => setLoginData({ ...loginData, email: text })}
            style={styles.input}
            autoCapitalize='none'
            keyboardType='email-address'
          />
          <TextInput
            placeholder='Password'
            placeholderTextColor={COLORS.parchment}
            onChangeText={(text) => setLoginData({ ...loginData, password: text })}
            style={styles.input}
            secureTextEntry={true}
            autoCapitalize='none'
          />
          <TouchableOpacity style={styles.basicButton} onPress={loginButtonHandler}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.centeredTextContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.rerouteText}>Don't have an account?</Text>
            <Text style={styles.rerouteText}> Sign up here.</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
