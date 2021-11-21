import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { styles } from './SignIn.style';
import { COLORS } from '../../globalStyles';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../Context';
import { login } from '../../apiService/loginFlow';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const context = useContext(Context);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [starStyle, setStarStyle] = useState({
    size: 100,
    left: 20,
    top: 50,
  });

  const loginButtonHandler = async () => {
    Keyboard.dismiss();
    console.log(loginData);
    try {
      const res = await login(
        loginData.email.toLowerCase(),
        loginData.password
      );
      const { authToken, user } = res.data;
      context.setIsAuthenticated(true);
      context.setCurrentUser(user);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={-64}
        style={styles.screenContainer}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Divination awaits!</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder='Email'
            placeholderTextColor={COLORS.parchment}
            onChangeText={(text) => setLoginData({ ...loginData, email: text })}
            style={styles.input}
          />
          <TextInput
            placeholder='Password'
            placeholderTextColor={COLORS.parchment}
            onChangeText={(text) =>
              setLoginData({ ...loginData, password: text })
            }
            style={styles.input}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.basicButton}
            onPress={loginButtonHandler}
          >
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
