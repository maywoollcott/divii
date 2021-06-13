import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import Registration from '../screens/registration/Registration';
import SignIn from '../screens/signIn/SignIn';

const RootNavigator = () => {
  const PreAuthStack = createStackNavigator();

  const PreAuthStackScreen = () => (
    <PreAuthStack.Navigator initialRouteName='SignIn'>
      <PreAuthStack.Screen
        name='SignIn'
        component={SignIn}
        options={{ headerShown: false }}
      />
      <PreAuthStack.Screen
        name='Registration'
        component={Registration}
        options={{
          headerShown: false,
          gestureEnabled: true,
        }}
      />
    </PreAuthStack.Navigator>
  );
  return (
    <NavigationContainer>
      <PreAuthStackScreen />
    </NavigationContainer>
  );
};

export default RootNavigator;
