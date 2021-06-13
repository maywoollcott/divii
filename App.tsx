import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import RootNavigator from './navigation/RootNavigator';
import AppLoading from './screens/AppLoading/AppLoading';

export default function App() {
  let [fontsLoaded] = useFonts({
    'made-dillan': require('./assets/fonts/MADEDillan.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <RootNavigator />;
  }
}
