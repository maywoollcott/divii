import React, { useState, useRef, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, Animated, TouchableOpacity, Platform, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Feather } from '@expo/vector-icons';
import { getCardByNumber, saveReading } from '../../apiService/data';
import { getCardNumbers } from '../../utils/pickRandomCard';
import { Context } from '../../Context';
import { styles } from './Spread.style';
import { COLORS } from '../../globalStyles';
import { ThreeCardSpread } from '../../components/Spread/ThreeCardSpread';
import { Reading, SpreadType } from '../../types';
import { spreadCopy } from './SpreadCopy';
import { FourCardSpread } from '../../components/Spread/FourCardSpread';
import { TwoCardSpread } from '../../components/Spread/TwoCardSpread';
import { OneCardSpread } from '../../components/Spread/OneCardSpread';
import AppLoading from '../AppLoading/AppLoading';
import Share from 'react-native-share';
import { captureRef } from 'react-native-view-shot';
import { BasicModal } from '../../components/Modal/BasicModal';
import { ShareModal } from '../../components/Modal/ShareModal';
interface ISpreadProps {
  route: SpreadParams;
}

export type SpreadParams = {
  params: SpreadType;
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

  const openShareModalHandler = () => {
    context.setModalText('modal');
    context.setModalOpen(true);
  };

  useEffect(() => {
    setTimeout(animate, 1000);
  }, [fadeAnim]);

  useEffect(() => {
    context.setIsLoading(true);
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
        spreadNumber: route.params.spreadNumber,
      };

      const fetchCard = async (randomCardNumber: number) => {
        const card = await getCardByNumber(randomCardNumber);
        const uprightValue = Math.random() < 0.5;

        reading.cards.push({
          deckNumber: randomCardNumber,
          upright: uprightValue,
        });
        setUpright((upright) => [...upright, uprightValue]);
        setSpreadData((spreadData) => [...spreadData, card]);

        if (reading.cards.length === route.params.numberOfCards) {
          saveReading(reading);
          let joined = context.readings.concat(reading);
          context.setReadings(joined);
        }
      };

      let numArray = getCardNumbers(route.params.numberOfCards);

      numArray?.forEach((num) => {
        fetchCard(num);
      });
    }
    setTimeout(() => {
      context.setIsLoading(false);
    }, 1000);
  }, []);

  if (context.isLoading) {
    return <AppLoading />;
  }
  return (
    <View style={styles.bounceContainer}>
      <ShareModal
        animationType='none'
        transparent={true}
        visible={context.modalOpen}
        onRequestClose={() => {
          context.setModalOpen(!context.modalOpen);
        }}
        cards={spreadData}
        spreadName={route.params.spreadName}
        upright={upright}
      />
      <ScrollView contentContainerStyle={styles.screenContainer}>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.touchableContainer}>
            <TouchableOpacity onPress={goBack} style={styles.backArrowContainer}>
              <Feather name='arrow-left' size={28} color={COLORS.grayBlue} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerContainer}>
            <View style={styles.shareAndHeaderContainer}>
              <Text style={styles.header}>
                {route.params.spreadName ? route.params.spreadName : route.params.name}{' '}
              </Text>
              <TouchableOpacity onPress={openShareModalHandler}>
                <Feather name='share' size={20} style={styles.share} />
              </TouchableOpacity>
            </View>
            {route.params.date && (
              <Text style={styles.secondaryHeader}>{moment(route.params.date).format('dddd, MMMM D, YYYY')}</Text>
            )}
          </View>
          {spreadData.length === 1 && (
            <OneCardSpread spreadData={spreadData} upright={upright} onCardFlip={onCardFlip} />
          )}
          {spreadData.length === 2 && (
            <TwoCardSpread spreadData={spreadData} upright={upright} onCardFlip={onCardFlip} />
          )}
          {spreadData.length === 3 && (
            <ThreeCardSpread spreadData={spreadData} upright={upright} onCardFlip={onCardFlip} />
          )}
          {spreadData.length === 4 && (
            <FourCardSpread spreadData={spreadData} upright={upright} onCardFlip={onCardFlip} />
          )}
          {currentCard !== null && displayInfo ? (
            <Animated.View style={{ ...styles.descriptionContainer, opacity: fadeAnim }}>
              {route.params.spreadNumber !== '8' && (
                <Text style={styles.spreadCopy}>
                  {spreadCopy[parseInt(route.params.spreadNumber)].itemNames[currentCard]}:
                </Text>
              )}
              <Text style={styles.header}>{spreadData[currentCard].name}</Text>
              <Text style={styles.reversed}>{upright[currentCard] ? 'Upright' : '(Reversed)'}</Text>
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
    </View>
  );
};

export default Spread;
