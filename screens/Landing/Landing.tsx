import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  AsyncStorage,
} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AutoHeightImage from 'react-native-auto-height-image';
import moment from 'moment';
import { Context } from '../../Context';
import { styles } from './Landing.style';
import { images } from '../../assets/images/imagesIndex';
import * as SecureStore from 'expo-secure-store';

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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <AutoHeightImage source={images.moons} width={250} />
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
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Landing;
