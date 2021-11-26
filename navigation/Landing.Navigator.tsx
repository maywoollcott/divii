import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Landing from '../screens/Landing/Landing';
import DailyCard from '../screens/DailyCard/DailyCard';
import SpreadIndex from '../screens/SpreadIndex/SpreadIndex';
import Spread from '../screens/Spread/Spread';
import { COLORS } from '../globalStyles';

const LandingStack = createStackNavigator();

export const LandingNavigator = () => {
  return (
    <LandingStack.Navigator
      initialRouteName='Landing'
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <LandingStack.Screen name='Landing' component={Landing} />
      <LandingStack.Screen name='DailyCard' component={DailyCard} />
      <LandingStack.Screen name='SpreadIndex' component={SpreadIndex} />
      <LandingStack.Screen name='Spread' component={Spread} />
    </LandingStack.Navigator>
  );
};
