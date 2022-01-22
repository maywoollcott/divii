import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CardDetails from '../screens/Library/CardDetails';
import Profile from '../screens/Profile/Profile';

const ProfileStack = createStackNavigator();

export const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName='Profile'
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <ProfileStack.Screen name='Profile' component={Profile} />
      <ProfileStack.Screen name='CardDetails' component={CardDetails} />
    </ProfileStack.Navigator>
  );
};
