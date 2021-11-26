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
import moment from 'moment';
import { Feather } from '@expo/vector-icons';
import { getAllSpreads, getCardByNumber } from '../../apiService/data';
import { Context } from '../../Context';
import { styles } from './SpreadIndex.style';
import { SpreadTouchable } from '../../components/Spread/SpreadTouchable';
import { COLORS } from '../../globalStyles';

const SpreadIndex = () => {
  const navigation = useNavigation();
  const [spreads, setSpreads] = useState<Array<any> | null>(null);

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchSpreads = async () => {
      const spreads = await getAllSpreads();
      setSpreads(spreads);
    };
    fetchSpreads();
  }, []);

  const onSpreadPress = (spread: any) => {
    navigation.navigate('Spread', spread);
    console.log(spread);
    console.log(spread.name);
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
          <Text style={styles.header}>Spreads</Text>
        </View>
        {spreads &&
          spreads.map((spread) => {
            return (
              <SpreadTouchable
                name={spread.name}
                onPress={() => onSpreadPress(spread)}
                key={spread.spreadNumber}
              />
            );
          })}
      </SafeAreaView>
    </ScrollView>
  );
};

export default SpreadIndex;
