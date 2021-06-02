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
} from 'react-native';
import styles from './SignIn.style';
import { COLORS } from '../../globalStyles';

const SignIn: React.FC = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const loginButtonHandler = () => {
    Keyboard.dismiss();
    console.log(loginData);
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
            placeholder='Username'
            placeholderTextColor='gray'
            onChangeText={(text) =>
              setLoginData({ ...loginData, username: text })
            }
            style={styles.input}
          />
          <TextInput
            placeholder='Password'
            placeholderTextColor={'gray'}
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
          <Text style={styles.rerouteText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => console.log('reroute to sign up')}>
            <Text style={styles.rerouteText}> Sign up here.</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
