import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useFonts } from 'expo-font';
import RootNavigator from './navigation/RootNavigator';
import AppLoading from './screens/AppLoading/AppLoading';
import { Provider } from './Context';
import {
  createClient,
  AnalyticsProvider,
} from '@segment/analytics-react-native';
import { MixpanelPlugin } from '@segment/analytics-react-native-plugin-mixpanel';

export default function App() {
  const segmentClient = createClient({
    writeKey: 'EWdVGta6VWFVNDlkhvaHnqjpBlI9WCKq',
    trackAppLifecycleEvents: true,
    //additional config options
  });

  segmentClient.add({ plugin: new MixpanelPlugin() });

  let [fontsLoaded] = useFonts({
    'made-dillan': require('./assets/fonts/MADEDillan.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider>
        <AnalyticsProvider client={segmentClient}>
          <RootNavigator />
        </AnalyticsProvider>
      </Provider>
    );
  }
}
