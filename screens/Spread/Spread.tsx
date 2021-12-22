import React, { useState, useRef, useEffect, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Animated,
  TouchableOpacity,
  Pressable,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Feather } from '@expo/vector-icons';
import { getCardByNumber, saveReading } from '../../apiService/data';
import { pickRandomCard } from '../../utils/pickRandomCard';
import { Context } from '../../Context';
import { styles } from './Spread.style';
import { TarotCard } from '../../components/TarotCard/TarotCard';
import { COLORS } from '../../globalStyles';
import { PastPresentFutureSpread } from '../../components/Spread/pastPresentFutureSpread';
import { Reading } from '../../types';
import { todayString } from 'react-native-calendars/src/expandableCalendar/commons';

interface ISpreadProps {
  route: SpreadParams;
}

export type SpreadParams = {
  params: Spread;
};

export type Spread = {
  name: string;
  generalDescription: string;
  numberOfCards: number;
  spreadNumber: number;
  id: string;
  date?: string;
  cards?: any[];
  spreadName?: string;
};

const Spread: React.FC<ISpreadProps> = ({ route }) => {
  const navigation = useNavigation();
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);
  const [currentCard, setCurrentCard] = useState<number | null>(null);
  const [spreadData, setSpreadData] = useState<Array<any>>([]);
  const [upright, setUpright] = useState<Array<any>>([]);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const context = useContext(Context);
  const today = moment().format('yyyy-MM-DD');

  const goBack = () => {
    navigation.goBack();
  };

  const onCardFlip = (index: number) => {
    setCurrentCard(index);
    setDisplayInfo(true);
  };
  const animate = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    setTimeout(animate, 1000);
  }, [fadeAnim]);

  useEffect(() => {
    if (route.params.cards) {
      const setCardsWithHistory = async () => {
        if (route.params.cards) {
          for (const card of route.params.cards) {
            const newCard = await getCardByNumber(card.deckNumber);
            setUpright((upright) => [...upright, card.upright]);
            setSpreadData((spreadData) => [...spreadData, newCard]);
          }
        }
      };
      setCardsWithHistory();
    } else {
      let reading: Reading = {
        date: today,
        userId: context.currentUser._id,
        spread: route.params.name,
        cards: [],
      };
      const fetchCard = async () => {
        const randomCardNumber = pickRandomCard(0, 78);
        const card = await getCardByNumber(randomCardNumber);
        const uprightValue = Math.random() < 0.5;

        reading.cards.push({
          deckNumber: randomCardNumber,
          upright: uprightValue,
        });

        console.log(reading.cards[0]);
        console.log(reading.cards.length);
        setUpright((upright) => [...upright, uprightValue]);
        setSpreadData((spreadData) => [...spreadData, card]);

        if (reading.cards.length === 3) {
          saveReading(reading);
        }
      };

      fetchCard();
      fetchCard();
      fetchCard();
    }
  }, []);

  const pastPresFutureCopy = ['Past', 'Present', 'Future'];

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.touchableContainer}>
          <TouchableOpacity onPress={goBack} style={styles.backArrowContainer}>
            <Feather name='arrow-left' size={28} color={COLORS.grayBlue} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            {route.params.spreadName
              ? route.params.spreadName
              : route.params.name}
          </Text>
          {route.params.date && (
            <Text style={styles.secondaryHeader}>
              {moment(route.params.date).format('dddd, MMMM D, YYYY')}
            </Text>
          )}
        </View>
        {spreadData.length >= 3 && (
          <PastPresentFutureSpread
            spreadData={spreadData}
            upright={upright}
            onCardFlip={onCardFlip}
          />
        )}
        {currentCard !== null && displayInfo ? (
          <Animated.View
            style={{ ...styles.descriptionContainer, opacity: fadeAnim }}
          >
            <Text style={styles.spreadCopy}>
              {pastPresFutureCopy[currentCard]}:
            </Text>
            <Text style={styles.header}>{spreadData[currentCard].name}</Text>
            <Text style={styles.reversed}>
              {upright[currentCard] ? 'Upright' : '(Reversed)'}
            </Text>
            <View style={styles.keyTermsContainer}>
              <Text style={styles.keyTerms}>
                {upright[currentCard]
                  ? spreadData[currentCard].uprightKeyTerms[0]
                  : spreadData[currentCard].reversedKeyTerms[0]}
              </Text>
              <Text style={styles.keyTerms}>
                {upright[currentCard]
                  ? spreadData[currentCard].uprightKeyTerms[1]
                  : spreadData[currentCard].reversedKeyTerms[1]}
              </Text>
              <Text style={styles.keyTerms}>
                {upright[currentCard]
                  ? spreadData[currentCard].uprightKeyTerms[2]
                  : spreadData[currentCard].reversedKeyTerms[2]}
              </Text>
            </View>
            <Text style={styles.description}>
              {upright[currentCard]
                ? spreadData[currentCard].uprightDescription
                : spreadData[currentCard].reversedDescription}
            </Text>
          </Animated.View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Spread;
