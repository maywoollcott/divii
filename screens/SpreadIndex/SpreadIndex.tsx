import React, { useState, useEffect } from 'react';
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
import { COLORS } from '../../globalStyles';
import { images } from '../../assets/images/imagesIndex';

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
