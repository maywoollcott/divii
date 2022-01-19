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
import { styles } from './Library.style';
import { SpreadTouchable } from '../../components/Spread/SpreadTouchable';
import { COLORS } from '../../globalStyles';
import { images } from '../../assets/images/imagesIndex';

const Library = () => {
  const navigation = useNavigation();
  const [spreads, setSpreads] = useState<Array<any> | null>(null);

  const goBack = () => {
    navigation.goBack();
  };

  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
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
    <View style={styles.bounceContainer}>
      <ScrollView contentContainerStyle={styles.screenContainer}>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.leftCurtainContainer}>
            <AutoHeightImage
              source={images.leftCurtain}
              width={130}
              style={styles.leftCurtain}
            />
            <AutoHeightImage
              source={images.rightCurtain}
              width={130}
              style={styles.rightCurtain}
            />
          </View>
          <View style={styles.headerContainer}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.header}>Library</Text>
            </View>
            <Text style={styles.descriptionText}>
              Use this as encyclopedia to reference the karmic and spiritual
              meanings of each of the seventy-eight cards in a Tarot deck.
            </Text>
          </View>
          <View style={styles.actionCardContainer}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigateTo('AllCards')}
            >
              <Text style={styles.touchableText}>All Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigateTo('MajorArcana')}
            >
              <Text style={styles.touchableText}>Major Arcana</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigateTo('MinorArcana')}
            >
              <Text style={styles.touchableText}>Minor Arcana</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigateTo('Suits')}
            >
              <Text style={styles.touchableText}>Suits</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.touchable}>
            <Text style={styles.touchableText}>Numerology</Text>
          </TouchableOpacity> */}
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Library;
