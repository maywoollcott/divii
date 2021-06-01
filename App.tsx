import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import SignIn from './screens/signIn/SignIn';
import AppLoading from './screens/AppLoading/AppLoading';

export default function App() {
  let [fontsLoaded] = useFonts({
    'made-dillan': require('./assets/fonts/MADEDillan.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <SignIn />;
  }
}
