import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Feather } from '@expo/vector-icons';
import { styles } from './DateHistory.style';
import { SpreadTouchable } from '../../components/Spread/SpreadTouchable';
import { COLORS } from '../../globalStyles';
import { Reading } from '../../types';
import { useAnalytics } from '@segment/analytics-react-native';
import {
  eventTypes,
  historyDetailsEvents,
} from '../../analytics/trackedEvents';
import { Context } from '../../Context';

interface IDateHistoryProps {
  route: DateHistoryParams;
}

export type DateHistoryParams = {
  params: Reading[];
};

const DateHistory: React.FC<IDateHistoryProps> = ({ route }) => {
  const navigation = useNavigation();
  const context = useContext(Context);
  const { track, identify, screen } = useAnalytics();

  const goBack = () => {
    track(historyDetailsEvents.backButton, {
      type: eventTypes.buttonPress,
      screen: historyDetailsEvents.screenName,
    });
    navigation.goBack();
  };

  useEffect(() => {
    identify(context.currentUser?._id, {
      name: context.currentUser?.name,
      email: context.currentUser?.email,
      dateJoined: context.currentUser?.dateJoined,
    });
    screen(historyDetailsEvents.screenName);
  });

  const onSpreadPress = (spread: string, readingInfo: any) => {
    track(`${historyDetailsEvents.selectReading} ${spread}`, {
      type: eventTypes.buttonPress,
      screen: historyDetailsEvents.screenName,
    });
    navigation.navigate('Spread', readingInfo);
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
            <Text style={styles.header}>Readings</Text>
            <Text style={styles.secondaryHeader}>
              {moment(route.params[0].date).format('dddd, MMMM D, YYYY')}
            </Text>
          </View>
          {route.params.map((reading, index) => {
            return (
              <SpreadTouchable
                name={reading.spread}
                onPress={() =>
                  onSpreadPress(reading.spread, {
                    date: reading.date,
                    cards: reading.cards,
                    spreadName: reading.spread,
                    spreadNumber: reading.spreadNumber,
                  })
                }
                key={index}
              />
            );
          })}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default DateHistory;
