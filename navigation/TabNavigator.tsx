import React from 'react';
import { SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Entypo,
  SimpleLineIcons,
  AntDesign,
  MaterialIcons,
  Ionicons,
} from '@expo/vector-icons';
import { COLORS } from '../globalStyles';
import { LandingNavigator } from './Landing.Navigator';
import { LibraryNavigator } from './Library.Navigator';
import { HistoryNavigator } from './History.Navigator';
import Study from '../screens/Study/Study';
import Profile from '../screens/Profile/Profile';

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  //add use effect to log out if necessary

  return (
    <Tab.Navigator
      initialRouteName='Landing'
      screenOptions={{
        tabBarActiveTintColor: COLORS.orange,
        tabBarInactiveTintColor: COLORS.grayBlue,
        tabBarShowLabel: false,
        headerStyle: { backgroundColor: COLORS.parchment, height: 50 },
        tabBarStyle: { backgroundColor: COLORS.parchment, borderTopWidth: 1 },
        title: '',
      }}
    >
      <Tab.Screen
        name='Landing'
        component={LandingNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name='home' color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name='Library'
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name='book-open' color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name='Study'
        component={Study}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='form' color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name='History'
        component={HistoryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='history' color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='person-outline' color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
