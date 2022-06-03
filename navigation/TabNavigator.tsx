import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Entypo,
  SimpleLineIcons,
  MaterialIcons,
  Ionicons,
} from '@expo/vector-icons';
import { COLORS } from '../globalStyles';
import { LandingNavigator } from './Landing.Navigator';
import { LibraryNavigator } from './Library.Navigator';
import { HistoryNavigator } from './History.Navigator';
import { ProfileNavigator } from './Profile.Navigator';

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  //add use effect to log out if necessary

  return (
    <Tab.Navigator
      initialRouteName='LandingNav'
      screenOptions={{
        tabBarActiveTintColor: COLORS.orange,
        tabBarInactiveTintColor: COLORS.grayBlue,
        tabBarShowLabel: false,
        headerShown: true,
        headerStyle: {
          backgroundColor: COLORS.parchment,
          height: Platform.OS === 'ios' ? 50 : 25,
        },
        tabBarStyle: { backgroundColor: COLORS.parchment, borderTopWidth: 1 },
        title: '',
      }}
    >
      <Tab.Screen
        name='LandingNav'
        component={LandingNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name='home' color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name='LibraryNav'
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name='book-open' color={color} size={28} />
          ),
        }}
      />
      {/* <Tab.Screen
        name='Study'
        component={Study}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='form' color={color} size={28} />
          ),
        }}
      /> */}
      <Tab.Screen
        name='HistoryNav'
        component={HistoryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='history' color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name='ProfileNav'
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='person-outline' color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
