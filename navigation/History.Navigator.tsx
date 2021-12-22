import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import History from '../screens/History/History';
import DateHistory from '../screens/History/DateHistory';
import DailyCard from '../screens/DailyCard/DailyCard';
import Spread from '../screens/Spread/Spread';

const HistoryStack = createStackNavigator();

export const HistoryNavigator = () => {
  return (
    <HistoryStack.Navigator
      initialRouteName='History'
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <HistoryStack.Screen name='History' component={History} />
      <HistoryStack.Screen name='DateHistory' component={DateHistory} />
      <HistoryStack.Screen name='Daily Reading' component={DailyCard} />
      <HistoryStack.Screen
        name='Past, Present, and Future'
        component={Spread}
      />
      <HistoryStack.Screen name='Love and Relationships' component={Spread} />
    </HistoryStack.Navigator>
  );
};
