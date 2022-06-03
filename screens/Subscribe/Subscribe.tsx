import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './Subscribe.style';
import { Context } from '../../Context';
import AppLoading from '../AppLoading/AppLoading';
import usePurchaseSubscription from '../../hooks/usePurchaseSubscription';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../../globalStyles';

const Subscribe = () => {
  const context = React.useContext(Context);

  const { purchaseSubscription } = usePurchaseSubscription();

  const purchaseHandler = async () => {
    await purchaseSubscription(context.currentUser._id);
  };

  if (!context.isLoading) {
    return (
      <ScrollView contentContainerStyle={styles.bounceContainer}>
        <View style={styles.screenContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.text}>try divii for free</Text>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.bulletContainer}>
              <AntDesign
                name='star'
                size={24}
                color={COLORS.grayBlue}
                style={styles.starBullet}
              />
              <Text style={styles.bodyText}>
                Tune into the ancient art of tarot to gain insight into your
                life
              </Text>
            </View>
            <View style={styles.bulletContainer}>
              <AntDesign
                name='star'
                size={24}
                color={COLORS.grayBlue}
                style={styles.starBullet}
              />
              <Text style={styles.bodyText}>
                Access to our comprehensive tarot encyclopedia and spread
                library
              </Text>
            </View>
            <View style={styles.bulletContainer}>
              <AntDesign
                name='star'
                size={24}
                color={COLORS.grayBlue}
                style={styles.starBullet}
              />
              <Text style={styles.bodyText}>
                Share your readings with friends and on social media
              </Text>
            </View>
            <View style={styles.bulletContainer}>
              <AntDesign
                name='star'
                size={24}
                color={COLORS.grayBlue}
                style={styles.starBullet}
              />
              <Text style={styles.bodyText}>
                Look back on your reading history from any date
              </Text>
            </View>
            <View style={styles.bulletContainer}>
              <AntDesign
                name='star'
                size={24}
                color={COLORS.grayBlue}
                style={styles.starBullet}
              />
              <Text style={styles.bodyText}>
                View and save your one-of-a-kind, personalized tarot card
              </Text>
            </View>
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.priceText}>
              Free for 7 days, then $2.99 a month. Cancel at anytime.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.basicButton}
            onPress={purchaseHandler}
          >
            <Text style={styles.buttonText}>Try free and subscribe</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  return <AppLoading />;
};

export default Subscribe;
