import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import moment from 'moment';
import { Context } from '../../Context';
import { styles } from './Landing.style';
import { images } from '../../assets/images/imagesIndex';
import { ScrollView } from 'react-native-gesture-handler';
import { useAnalytics } from '@segment/analytics-react-native';
import { eventTypes, landingEvents } from '../../analytics/trackedEvents';

const Landing = () => {
  const navigation = useNavigation();
  const context = useContext(Context);
  const isFocused = useIsFocused();
  const { track, identify, screen } = useAnalytics();

  const hour = moment().hour();

  const [day, setDay] = useState<any>();

  useEffect(() => {
    let now = moment();
    setDay(now);
    identify(context.currentUser._id, {
      name: context.currentUser.name,
      email: context.currentUser.email,
      dateJoined: context.currentUser.dateJoined,
    });
    screen(landingEvents.screenName);
  }, [isFocused]);

  const greeting = () => {
    if (hour < 12) {
      return 'morning';
    } else if (hour < 17) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  };

  const navigateToCardOfDay = () => {
    track(landingEvents.cardOfTheDay, {
      type: eventTypes.buttonPress,
    });

    navigation.navigate('DailyCard');
  };

  const navigateToSpreadIndex = () => {
    track(landingEvents.chooseASpread, {
      type: eventTypes.buttonPress,
      email: context.currentUser.email,
      id: context.currentUser._id,
    });

    navigation.navigate('SpreadIndex');
  };

  const navigateToPersonalCard = () => {
    track(landingEvents.personalCard, {
      type: eventTypes.buttonPress,
      email: context.currentUser.email,
      id: context.currentUser._id,
    });

    navigation.navigate('PersonalCard', {
      personalCardNumber: context.currentUser?.personalCard,
      name: context.currentUser?.name,
      personalNumber: context.currentUser?.personalNumber,
      cardBackNumber: context.currentUser?.personalCardBack,
    });
  };

  return (
    <View style={styles.bounceContainer}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
              <Image source={images.moons} style={styles.moons} />
              <Text style={styles.morningGreeting}>
                Good {greeting()}, {context.currentUser?.name}. Today is{' '}
                {day?.format('dddd, MMMM D, YYYY')}.
              </Text>
            </View>
            <View style={styles.actionCardContainer}>
              <TouchableOpacity
                style={styles.touchable}
                onPress={navigateToCardOfDay}
              >
                <Text style={styles.header}>Your Card of the Day</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchable}
                onPress={navigateToSpreadIndex}
              >
                <Text style={styles.header}>Choose a Spread</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchable}
                onPress={navigateToPersonalCard}
              >
                <Text style={styles.header}>
                  The {context.currentUser?.name} Card
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Landing;
