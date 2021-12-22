import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import { getReadingsByUser } from '../../apiService/data';
import { Context } from '../../Context';
import { getAllCards } from '../../apiService/data';
import { styles } from './History.style';
import { COLORS } from '../../globalStyles';
import { Card, Reading } from '../../types';
import moment, { Moment } from 'moment';

const History = () => {
  const [allCardsData, setAllCardsData] = useState<Card[] | null>(null);
  const [filteredCards, setFilteredCards] = useState<Card[] | null>(null);
  const [userReadings, setUserReadings] = useState<Reading[] | null>(null);
  const [markedDates, setMarkedDates] = useState<any>(null);

  const navigation = useNavigation();

  const context = useContext(Context);

  const today = moment().format('yyyy-MM-DD');

  useEffect(() => {
    const fetchReadings = async () => {
      console.log(context.currentUser._id);
      const readings = await getReadingsByUser(context.currentUser._id);
      setUserReadings(readings);
    };

    fetchReadings();
  }, []);

  useEffect(() => {
    let tempMarkedDates = {};
    userReadings?.forEach((reading) => {
      Object.assign(tempMarkedDates, { [reading.date]: readingDateFormat });
    });
    tempMarkedDates = {
      ...tempMarkedDates,
      ...{ [today]: todaysDateFormat },
    };
    console.log(tempMarkedDates);
    setMarkedDates(tempMarkedDates);
  }, [userReadings]);

  const filterReadingsByDate = (date: string) => {
    const allReadings = userReadings;
    const filtered = allReadings?.filter((reading: Reading) => {
      return reading.date == date;
    });
    return filtered;
  };

  const onDateClick = async (day: any) => {
    const readingsOnThisDate = filterReadingsByDate(day.dateString);
    if (readingsOnThisDate?.length) {
      navigation.navigate('DateHistory', readingsOnThisDate);
    }
  };

  const readingDateFormat = {
    selected: true,
    selectedColor: COLORS.charcoal,
  };
  const todaysDateFormat = {
    selected: true,
    selectedColor: COLORS.parchment,
    selectedTextColor: COLORS.charcoal,
  };

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.header}>History</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              You have completed 86 readings since joining Divii. Now it’s time
              for a little reflection.
            </Text>
          </View>
        </View>
        <Calendar
          style={{
            backgroundColor: COLORS.grayBlue,
            borderRadius: 15,
            paddingVertical: 10,
            width: Dimensions.get('screen').width * 0.85,
          }}
          theme={{
            backgroundColor: COLORS.grayBlue,
            calendarBackground: COLORS.grayBlue,
            dayTextColor: 'white',
            monthTextColor: 'white',
            todayTextColor: COLORS.charcoal,
            arrowColor: 'white',
          }}
          hideExtraDays={true}
          enableSwipeMonths={true}
          markedDates={markedDates}
          onDayPress={onDateClick}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default History;
