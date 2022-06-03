import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import Registration from '../screens/registration/Registration';
import SignIn from '../screens/signIn/SignIn';
import { Context } from '../Context';
import { TabNavigator } from './TabNavigator';
import Subscribe from '../screens/Subscribe/Subscribe';

const RootNavigator = () => {
  const PreAuthStack = createStackNavigator();
  const SubscribeStack = createStackNavigator();
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

  const SubscribeScreen = () => (
    <SubscribeStack.Navigator>
      <SubscribeStack.Screen
        name='Subscribe'
        component={Subscribe}
        options={{ headerShown: false }}
      />
    </SubscribeStack.Navigator>
  );

  if (context.isAuthenticated && context.isSubscribed) {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  } else if (context.isAuthenticated && !context.isSubscribed) {
    return (
      <NavigationContainer>
        <SubscribeScreen />
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
