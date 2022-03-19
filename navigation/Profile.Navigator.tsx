import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Settings from '../screens/Settings/Settings';
import CardDetails from '../screens/Library/CardDetails';
import Profile from '../screens/Profile/Profile';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import ManageSubscription from '../screens/ManageSubscription/ManageSubscription';

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
      <ProfileStack.Screen name='Settings' component={Settings} />
      <ProfileStack.Screen name='ResetPassword' component={ResetPassword} />
      <ProfileStack.Screen name='ManageSubscription' component={ManageSubscription} />
    </ProfileStack.Navigator>
  );
};
