import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { getAllSpreads } from '../../apiService/data';
import { styles } from './SpreadIndex.style';
import { SpreadTouchable } from '../../components/Spread/SpreadTouchable';
import { SpreadType } from '../../types';
import { COLORS } from '../../globalStyles';
import { images } from '../../assets/images/imagesIndex';
import { useAnalytics } from '@segment/analytics-react-native';
import { eventTypes, spreadEvents } from '../../analytics/trackedEvents';
import { Context } from '../../Context';

const SpreadIndex = () => {
  const navigation = useNavigation();
  const context = useContext(Context);
  const [spreads, setSpreads] = useState<Array<SpreadType> | null>();

  const { track, identify, screen } = useAnalytics();

  const goBack = () => {
    track(spreadEvents.backButton, {
      type: eventTypes.buttonPress,
      screen: spreadEvents.screenName,
    });
    navigation.goBack();
  };

  useEffect(() => {
    const fetchSpreads = async () => {
      const spreads: SpreadType[] = await getAllSpreads();
      console.log(spreads);
      setSpreads(spreads);
    };
    fetchSpreads();
    identify(context.currentUser._id, {
      name: context.currentUser.name,
      email: context.currentUser.email,
      dateJoined: context.currentUser.dateJoined,
    });
    screen(spreadEvents.screenName);
  }, []);

  const onSpreadPress = (spread: any) => {
    track(spread.name, {
      type: eventTypes.buttonPress,
      screen: spreadEvents.screenName,
    });
    navigation.navigate('Spread', spread);
  };

  return (
    <View style={styles.bounceContainer}>
      <ScrollView contentContainerStyle={styles.screenContainer}>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.touchableContainer}>
            <TouchableOpacity
              onPress={goBack}
              style={styles.backArrowContainer}
            >
              <Feather name='arrow-left' size={28} color={COLORS.grayBlue} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerContainer}>
            <Image source={images.whiteStar} style={styles.whiteStar} />
            <Text style={styles.header}>Spreads</Text>
            <Image source={images.whiteStar} style={styles.whiteStar} />
          </View>
          {spreads &&
            spreads.map((spread) => {
              if (spread.spreadNumber !== 8) {
                return (
                  <SpreadTouchable
                    name={spread.name}
                    onPress={() => onSpreadPress(spread)}
                    key={spread.spreadNumber}
                  />
                );
              }
            })}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default SpreadIndex;
