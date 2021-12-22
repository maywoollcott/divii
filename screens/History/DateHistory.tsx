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
import AutoHeightImage from 'react-native-auto-height-image';
import moment from 'moment';
import { Feather } from '@expo/vector-icons';
import { getAllSpreads, getCardByNumber } from '../../apiService/data';
import { Context } from '../../Context';
import { styles } from './DateHistory.style';
import { SpreadTouchable } from '../../components/Spread/SpreadTouchable';
import { COLORS } from '../../globalStyles';
import { Reading } from '../../types';
import { images } from '../../assets/images/imagesIndex';

interface IDateHistoryProps {
  route: DateHistoryParams;
}

export type DateHistoryParams = {
  params: Reading[];
};

const DateHistory: React.FC<IDateHistoryProps> = ({ route }) => {
  const navigation = useNavigation();
  const [spreads, setSpreads] = useState<Array<any> | null>(null);

  const goBack = () => {
    navigation.goBack();
  };

  const onSpreadPress = (spread: string, readingInfo: any) => {
    navigation.navigate(spread, readingInfo);
  };

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.touchableContainer}>
          <TouchableOpacity onPress={goBack} style={styles.backArrowContainer}>
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
                })
              }
              key={index}
            />
          );
        })}
      </SafeAreaView>
    </ScrollView>
  );
};

export default DateHistory;
