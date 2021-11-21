import React, { useContext } from 'react';
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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AutoHeightImage from 'react-native-auto-height-image';
import { Context } from '../../Context';
import { styles } from './Landing.style';
import { images } from '../../assets/images/imagesIndex';

const Landing = () => {
  const navigation = useNavigation();
  const context = useContext(Context);

  const navigateToCardOfDay = () => {
    navigation.navigate('DailyCard');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <AutoHeightImage source={images.moons} width={250} />
          <Text style={styles.morningGreeting}>
            Good morning, May. Today is Tuesday, November 4th, 2021. The moon is
            currently in Jupiter and Mercury is retrograde.
          </Text>
        </View>
        <View style={styles.actionCardContainer}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={navigateToCardOfDay}
          >
            <Text style={styles.header}>Your Card of the Day</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>
            <Text style={styles.header}>Choose a Spread</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Landing;
