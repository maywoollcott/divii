import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { logout } from '../../apiService/loginFlow';
import { getReadingsByUser, getCardByNumber } from '../../apiService/data';
import { styles } from './Profile.style';
import { Context } from '../../Context';
import { Reading } from '../../types';
import AppLoading from '../AppLoading/AppLoading';
import { arcanaNames } from '../../copy/Cards';

const Profile = () => {
  const context = React.useContext(Context);
  const navigate = useNavigation();

  const [mostFrequentCard, setMostFrequentCard] = useState<number>();
  const [mostFrequentSpread, setMostFrequentSpread] = useState<string>();

  const logoutButtonHandler = async () => {
    context.setIsLoading(true);
    const token = await SecureStore.getItemAsync('DIVII_TOKEN_AUTH');
    if (token) {
      logout(token);
    }
    context.setCurrentUser(null);
    context.setIsAuthenticated(false);
    context.setIsLoading(false);
  };

  useEffect(() => {
    let cards: string[] = [];
    let spreads: string[] = [];
    if (context.readings.length > 0) {
      for (let i = 0; i < context.readings.length; i++) {
        let singleReadingCardsObject = context.readings[i];
        spreads.push(singleReadingCardsObject.spread);
        singleReadingCardsObject.cards.forEach((cardObject: any) => {
          cards.push(cardObject.deckNumber);
        });
      }
      const mostFreqCardNumber = getMostFrequent(cards);
      fetchMostFreqCard(parseInt(mostFreqCardNumber));
      const mostFreqSpread = getMostFrequent(spreads);
      setMostFrequentSpread(mostFreqSpread);
      setTimeout(() => {
        context.setIsLoading(false);
      }, 500);
    }
  }, [context.readings]);

  function getMostFrequent(arr: any) {
    const hashmap = arr.reduce(
      (acc: { [x: string]: any }, val: string | number) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      },
      {}
    );
    return Object.keys(hashmap).reduce((a, b) =>
      hashmap[a] > hashmap[b] ? a : b
    );
  }

  const fetchMostFreqCard = async (cardNumber: number) => {
    setMostFrequentCard(cardNumber);
  };

  const dateJoined = moment(context.currentUser?.dateJoined);

  const navigateToCard = async (card: number) => {
    const mostFreqCardInfo = await getCardByNumber(card);
    navigate.navigate('CardDetails', mostFreqCardInfo);
  };

  const renderMostFrequentlyDrawnCard = () => {
    if (context.readings.length === 0) {
      return (
        <Text style={styles.bodyText}>
          You don't have a most frequently drawn card yet.
        </Text>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => navigateToCard(mostFrequentCard)}>
          <Text style={styles.bodyText}>
            Your most frequently drawn card is the
            <Text style={styles.bodyTextHighlight}>
              {' '}
              {arcanaNames[mostFrequentCard]}.
            </Text>
          </Text>
        </TouchableOpacity>
      );
    }
  };

  const renderFavoriteSpread = () => {
    if (context.readings.length === 0) {
      return (
        <Text style={styles.bodyText}>
          You don't have a favorite spread yet.
        </Text>
      );
    } else {
      return (
        <Text style={styles.bodyText}>
          Your favorite spread is the
          <Text style={styles.bodyTextHighlight}> {mostFrequentSpread} </Text>
          spread.
        </Text>
      );
    }
  };

  if (!context.isLoading) {
    return (
      <View style={styles.screenContainer}>
        <View>
          <Text style={styles.headerText}>
            Hi, {context.currentUser?.name}.
          </Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.bodyTextSingleContainer}>
            <Text style={styles.bodyText}>
              You’ve been divinating since
              <Text style={styles.bodyTextHighlight}>
                {' '}
                {dateJoined.format('MMMM D, YYYY')}.
              </Text>
            </Text>
          </View>
          <View style={styles.bodyTextSingleContainer}>
            <Text style={styles.bodyText}>You’ve completed</Text>
            <Text style={styles.bodyTextHighlight}>
              {' '}
              {context.readings?.length}{' '}
            </Text>
            <Text style={styles.bodyText}> readings.</Text>
          </View>
          <View style={styles.bodyTextSingleContainer}>
            {renderMostFrequentlyDrawnCard()}
          </View>
          <View style={styles.bodyTextSingleContainer}>
            {renderFavoriteSpread()}
          </View>
        </View>
        <TouchableOpacity
          style={styles.basicButton}
          onPress={logoutButtonHandler}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <AppLoading />;
};

export default Profile;
