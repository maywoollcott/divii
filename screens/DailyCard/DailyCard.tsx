import React, { useState, useRef, useEffect, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Feather } from '@expo/vector-icons';
import {
  getCardByNumber,
  saveReading,
  getReadingsByUser,
} from '../../apiService/data';
import { getCardNumbers } from '../../utils/pickRandomCard';
import { Context } from '../../Context';
import { styles } from './DailyCard.style';
import { TarotCard } from '../../components/TarotCard/TarotCard';
import { COLORS } from '../../globalStyles';
import AppLoading from '../AppLoading/AppLoading';
import { ShareModal } from '../../components/Modal/ShareModal';
import { useAnalytics } from '@segment/analytics-react-native';
import { eventTypes, dailyReadingEvents } from '../../analytics/trackedEvents';

const { width } = Dimensions.get('window');

interface IDailyCardProps {
  route?: DailyCardParams;
}

export type DailyCardParams = {
  params: {
    date: string;
    cards: any[];
  };
};

const DailyCard: React.FC<IDailyCardProps> = ({ route }) => {
  const navigation = useNavigation();
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);
  const [dailyCardData, setDailyCardData] = useState<any>(null);
  const [upright, setUpright] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { track, identify, screen } = useAnalytics();

  const now = moment();
  const today = moment().format('yyyy-MM-DD');
  const context = useContext(Context);

  const goBack = () => {
    track(dailyReadingEvents.backButton, {
      type: eventTypes.buttonPress,
      screen: dailyReadingEvents.screenName,
    });
    navigation.goBack();
  };
  const onCardFlip = () => {
    track(dailyReadingEvents.flip, {
      type: eventTypes.flip,
      screen: dailyReadingEvents.screenName,
    });
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
    identify(context.currentUser._id, {
      name: context.currentUser.name,
      email: context.currentUser.email,
      dateJoined: context.currentUser.dateJoined,
    });
    screen(dailyReadingEvents.screenName);
    const fetchCard = async () => {
      context.setIsLoading(true);
      if (route?.params?.cards) {
        const card = await getCardByNumber(route.params.cards[0].deckNumber);
        setDailyCardData(card);
        setUpright(route.params.cards[0].upright);
        return;
      }

      const usersCards = await getReadingsByUser(context.currentUser._id);
      const todaysCard = await usersCards.filter((reading: any) => {
        return reading.date === today && reading.spread === 'Daily Reading';
      });

      if (todaysCard?.length) {
        const card = await getCardByNumber(todaysCard[0].cards[0].deckNumber);
        setDailyCardData(card);
        setUpright(todaysCard[0].cards[0].upright);
        context.setIsLoading(false);
      } else {
        const randomCardNumber = getCardNumbers(1);
        console.log(randomCardNumber);
        const card = await getCardByNumber(randomCardNumber[0]);
        const isUpright = Math.random() < 0.5;
        setUpright(isUpright);
        setDailyCardData(card);
        const reading = {
          date: today,
          userId: context.currentUser._id,
          spread: 'Daily Reading',
          cards: [
            {
              deckNumber: randomCardNumber[0],
              upright: isUpright,
            },
          ],
          spreadNumber: '8',
        };
        saveReading(reading);
        let joined = context.readings.concat(reading);
        context.setReadings(joined);
        context.setIsLoading(false);
      }
    };
    fetchCard();
  }, []);

  const openShareModalHandler = () => {
    track(dailyReadingEvents.shareButton, {
      type: eventTypes.buttonPress,
      screen: dailyReadingEvents.screenName,
    });
    context.setModalOpen(true);
  };

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
        cards={[dailyCardData]}
        spreadName={'Daily Reading'}
        upright={[upright]}
      />
      <ScrollView contentContainerStyle={styles.screenContainer}>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.touchableContainer}>
            <TouchableOpacity
              onPress={goBack}
              style={styles.backArrowContainer}
            >
              <Feather name='arrow-left' size={28} color={COLORS.grayBlue} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={openShareModalHandler}
              style={styles.shareContainer}
            >
              <Feather name='share' size={25} color={COLORS.grayBlue} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerContainer}>
            <View style={styles.shareAndHeaderContainer}>
              <Text style={styles.header}>Daily Reading</Text>
            </View>
            <Text style={styles.secondaryHeader}>
              {route?.params
                ? moment(route.params.date).format('dddd, MMMM D, YYYY')
                : now.format('dddd, MMMM D, YYYY')}
            </Text>
          </View>
          <View style={{ height: width * 1.15 }}>
            {dailyCardData && (
              <TarotCard
                image={dailyCardData.image}
                rightSideUp={upright}
                onCardFlip={onCardFlip}
                width={width * 0.7}
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
    </View>
  );
};

export default DailyCard;
