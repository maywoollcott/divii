import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Linking, Image, ScrollView } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Subscribe.style';
import { Context } from '../../Context';
import AppLoading from '../AppLoading/AppLoading';
import usePurchaseSubscription from '../../hooks/usePurchaseSubscription';

const Subscribe = () => {
  const context = React.useContext(Context);
  const navigate = useNavigation();

  const { purchaseSubscription } = usePurchaseSubscription();

  const purchaseHandler = async () => {
    await purchaseSubscription();
  };

  if (!context.isLoading) {
    return (
      <ScrollView contentContainerStyle={styles.bounceContainer}>
        <View style={styles.screenContainer}>
          <Text style={styles.text}>try divii free for one week</Text>
          <TouchableOpacity style={styles.basicButton} onPress={purchaseHandler}>
            <Text style={styles.buttonText}>Subscription Options</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  return <AppLoading />;
};

export default Subscribe;
