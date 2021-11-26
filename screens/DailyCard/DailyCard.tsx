import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Feather } from '@expo/vector-icons';
import { getCardByNumber } from '../../apiService/data';
import { pickRandomCard } from '../../utils/pickRandomCard';
import { Context } from '../../Context';
import { styles } from './DailyCard.style';
import { TarotCard } from '../../components/TarotCard/TarotCard';
import { COLORS } from '../../globalStyles';

const DailyCard = () => {
  const navigation = useNavigation();
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);
  const [dailyCardData, setDailyCardData] = useState<any>(null);
  const [upright, setUpright] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const now = moment();

  const goBack = () => {
    navigation.goBack();
  };
  const onCardFlip = () => {
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
    const fetchCard = async () => {
      const randomCardNumber = pickRandomCard(0, 22);
      const card = await getCardByNumber(randomCardNumber);
      setUpright(Math.random() < 0.5);
      setDailyCardData(card);
    };

    fetchCard();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.touchableContainer}>
          <TouchableOpacity onPress={goBack} style={styles.backArrowContainer}>
            <Feather name='arrow-left' size={28} color={COLORS.grayBlue} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Your Card of the Day</Text>
          <Text style={styles.secondaryHeader}>
            {now.format('dddd, MMMM D, YYYY')}
          </Text>
        </View>
        <View style={{ height: 413 }}>
          {dailyCardData && (
            <TarotCard
              image={dailyCardData.image}
              rightSideUp={upright}
              onCardFlip={onCardFlip}
              width={250}
            />
          )}
        </View>
        {displayInfo && dailyCardData && (
          <Animated.View
            style={{ ...styles.descriptionContainer, opacity: fadeAnim }}
          >
            <Text style={styles.header}>{dailyCardData.name}</Text>
            <Text style={styles.reversed}>
              {upright ? 'Upright' : '(Reversed)'}
            </Text>
            <View style={styles.keyTermsContainer}>
              <Text style={styles.keyTerms}>
                {upright
                  ? dailyCardData.uprightKeyTerms[0]
                  : dailyCardData.reversedKeyTerms[0]}
              </Text>
              <Text style={styles.keyTerms}>
                {upright
                  ? dailyCardData.uprightKeyTerms[1]
                  : dailyCardData.reversedKeyTerms[1]}
              </Text>
              <Text style={styles.keyTerms}>
                {upright
                  ? dailyCardData.uprightKeyTerms[2]
                  : dailyCardData.reversedKeyTerms[2]}
              </Text>
            </View>
            <Text style={styles.description}>
              {upright
                ? dailyCardData.uprightDescription
                : dailyCardData.reversedDescription}
            </Text>
          </Animated.View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default DailyCard;
