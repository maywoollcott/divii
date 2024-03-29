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
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { styles } from './SignIn.style';
import { COLORS } from '../../globalStyles';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../Context';
import { getUserByToken, login } from '../../apiService/loginFlow';
import { getReadingsByUser } from '../../apiService/data';
import AppLoading from '../AppLoading/AppLoading';
import { loginResponse } from '../../types';
import { BasicModal } from '../../components/Modal/BasicModal';
import useIsSubscribed from '../../hooks/useIsSubscribed';
import { useAnalytics } from '@segment/analytics-react-native';
import { eventTypes, signInEvents } from '../../analytics/trackedEvents';
import * as Contacts from 'expo-contacts';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const context = useContext(Context);
  const { track, identify, screen, reset } = useAnalytics();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const { checkIfSubscribed } = useIsSubscribed();

  const isAuthenticatedCheck = async () => {
    let token = await SecureStore.getItemAsync('DIVII_TOKEN_AUTH');
    if (token !== null) {
      context.setIsLoading(true);
      const res: loginResponse = await getUserByToken(token);
      console.log(res);
      if (res.status === 200) {
        const { user } = res;
        identify(user._id, {
          name: user.name,
          email: user.email,
          dateJoined: user.dateJoined,
        });
        track(signInEvents.loginPersisted, {
          type: eventTypes.networkEvent,
          screen: signInEvents.screenName,
        });
        context.setIsAuthenticated(true);
        context.setCurrentUser(user);
        const readings = await getReadingsByUser(user._id);
        context.setReadings(readings);
        context.setIsLoading(false);
        // await checkIfSubscribed(user.id);
      } else {
        if (res.message) {
          context.setModalText(res.message);
          context.setModalOpen(true);
        }
        context.setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    screen(signInEvents.screenName);
    isAuthenticatedCheck();
  }, []);

  const loginButtonHandler = async () => {
    track(signInEvents.loginButton, {
      type: eventTypes.buttonPress,
      screen: signInEvents.screenName,
    });
    Keyboard.dismiss();
    try {
      context.setIsLoading(true);
      const res: loginResponse = await login(
        loginData.email.toLowerCase(),
        loginData.password
      );
      if (res.status === 200) {
        reset();
        const { user, token } = res;
        identify(user._id, {
          name: user.name,
          email: user.email,
          dateJoined: user.dateJoined,
        });
        if (token) {
          await SecureStore.setItemAsync('DIVII_TOKEN_AUTH', token);
        }
        context.setIsAuthenticated(true);
        context.setCurrentUser(user);
        const readings = await getReadingsByUser(user._id);
        context.setReadings(readings);
        // await checkIfSubscribed(user._id);
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
      context.setModalText(
        'Network error. Please check your internet connection.'
      );
      context.setModalOpen(true);
      context.setIsLoading(false);
      console.log(err);
    }
  };

  const navigateToForgotPassword = () => {
    track(signInEvents.forgotPassword, {
      type: eventTypes.buttonPress,
      screen: signInEvents.screenName,
    });
    navigation.navigate('ForgotPassword');
  };

  const navigateToRegister = () => {
    track(signInEvents.register, {
      type: eventTypes.buttonPress,
      screen: signInEvents.screenName,
    });
    navigation.navigate('Registration');
  };

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
            <TouchableOpacity onPress={navigateToForgotPassword}>
              <Text style={styles.rerouteTextPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToRegister}>
              <Text style={styles.rerouteText}>Don't have an account?</Text>
              <Text style={styles.rerouteText}> Sign up here.</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }

  return <AppLoading />;
};

export default SignIn;
