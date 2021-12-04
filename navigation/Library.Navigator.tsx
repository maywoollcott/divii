import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Library from '../screens/Library/Library';
import AllCards from '../screens/Library/AllCards';
import CardDetails from '../screens/Library/CardDetails';

const LibraryStack = createStackNavigator();

export const LibraryNavigator = () => {
  return (
    <LibraryStack.Navigator
      initialRouteName='Library'
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <LibraryStack.Screen name='Library' component={Library} />
      <LibraryStack.Screen name='AllCards' component={AllCards} />
      <LibraryStack.Screen name='CardDetails' component={CardDetails} />
    </LibraryStack.Navigator>
  );
};
