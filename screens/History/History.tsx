import React, { useEffect, useState, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import { Context } from '../../Context';
import { styles } from './History.style';
import { COLORS } from '../../globalStyles';
import { Reading } from '../../types';
import moment from 'moment';
import AppLoading from '../AppLoading/AppLoading';

const History = () => {
  const [markedDates, setMarkedDates] = useState<any>(null);

  const navigation = useNavigation();

  const context = useContext(Context);

  const today = moment().format('yyyy-MM-DD');

  useEffect(() => {
    let tempMarkedDates = {};
    context.readings?.forEach((reading: Reading) => {
      Object.assign(tempMarkedDates, { [reading.date]: readingDateFormat });
    });
    tempMarkedDates = {
      ...tempMarkedDates,
      ...{ [today]: todaysDateFormat },
    };
    console.log(tempMarkedDates);
    setMarkedDates(tempMarkedDates);
  }, [context.readings]);

  const filterReadingsByDate = (date: string) => {
    const allReadings = context.readings;
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

  if (!context.isLoading) {
    return (
      <ScrollView contentContainerStyle={styles.screenContainer}>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.header}>History</Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>
                You have completed {context.readings?.length} readings since
                joining Divii. Now it’s time for a little reflection.
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
  }

  return <AppLoading />;
};

export default History;
