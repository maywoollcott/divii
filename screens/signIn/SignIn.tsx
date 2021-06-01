import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './SignIn.style';
import { COLORS } from '../../globalStyles';

const SignIn: React.FC = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Divination awaits!</Text>
      </View>
      <View>
        <Text style={styles.subtext}>Sign in below.</Text>
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
        />
      </View>
    </View>
  );
};

export default SignIn;
