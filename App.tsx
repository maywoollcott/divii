import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useFonts } from 'expo-font';
import RootNavigator from './navigation/RootNavigator';
import AppLoading from './screens/AppLoading/AppLoading';
import { Provider } from './Context';

export default function App() {
  let [fontsLoaded] = useFonts({
    'made-dillan': require('./assets/fonts/MADEDillan.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider>
        <RootNavigator />
      </Provider>
    );
  }
}
