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

const Landing = () => {
  const navigation = useNavigation();
  const context = useContext(Context);
  const isFocused = useIsFocused();

  const hour = moment().hour();

  const [day, setDay] = useState<any>();

  useEffect(() => {
    let now = moment();
    setDay(now);
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
    navigation.navigate('DailyCard');
  };

  const navigateToSpreadIndex = () => {
    navigation.navigate('SpreadIndex');
  };

  const navigateToPersonalCard = () => {
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
