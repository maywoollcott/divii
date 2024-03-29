import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Library from '../screens/Library/Library';
import AllCards from '../screens/Library/AllCards';
import CardDetails from '../screens/Library/CardDetails';
import MajorArcana from '../screens/Library/MajorArcana';
import MinorArcana from '../screens/Library/MinorArcana';
import Suits from '../screens/Library/Suits';

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
      <LibraryStack.Screen
        name='AllCards'
        component={AllCards}
        options={{ gestureEnabled: false }}
      />
      <LibraryStack.Screen name='CardDetails' component={CardDetails} />
      <LibraryStack.Screen
        name='MajorArcana'
        component={MajorArcana}
        options={{ gestureEnabled: false }}
      />
      <LibraryStack.Screen
        name='MinorArcana'
        component={MinorArcana}
        options={{ gestureEnabled: false }}
      />
      <LibraryStack.Screen
        name='Suits'
        component={Suits}
        options={{ gestureEnabled: false }}
      />
    </LibraryStack.Navigator>
  );
};
