import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../../apiService/loginFlow';
import { styles } from './Profile.style';
import { Context } from '../../Context';

const Profile = () => {
  const context = React.useContext(Context);
  const navigate = useNavigation();

  const logoutButtonHandler = async () => {
    const token = await SecureStore.getItemAsync('DIVII_TOKEN_AUTH');
    console.log(token);
    if (token) {
      logout(token);
    }
    context.setCurrentUser(null);
    context.setIsAuthenticated(false);
  };
  return (
    <View style={styles.screenContainer}>
      <Text>Profile Screen</Text>
      <TouchableOpacity style={styles.basicButton} onPress={logoutButtonHandler}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
