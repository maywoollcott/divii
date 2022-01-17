import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import Registration from '../screens/registration/Registration';
import SignIn from '../screens/signIn/SignIn';
import { Context } from '../Context';
import { TabNavigator } from './TabNavigator';

const RootNavigator = () => {
  const PreAuthStack = createStackNavigator();
  const PostAuthStack = createStackNavigator();
  const context = useContext(Context);

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

  if (context.isAuthenticated) {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <PreAuthStackScreen />
      </NavigationContainer>
    );
  }
};

export default RootNavigator;
