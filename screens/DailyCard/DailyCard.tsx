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
import { Context } from '../../Context';
import { styles } from './DailyCard.style';
import { TarotCard } from '../../components/TarotCard/TarotCard';
import { arcanaNames } from '../../copy/Cards';
import { COLORS } from '../../globalStyles';

const DailyCard = () => {
  const navigation = useNavigation();
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const now = moment();

  const goBack = () => {
    navigation.goBack();
  };
  const onCardFlip = () => {
    setDisplayInfo(true);
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <SafeAreaView style={styles.safeContainer}>
        <TouchableOpacity onPress={goBack} style={styles.backArrowContainer}>
          <Feather name='arrow-left' size={28} color={COLORS.grayBlue} />
        </TouchableOpacity>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Your Card of the Day</Text>
          <Text style={styles.secondaryHeader}>
            {now.format('dddd, MMMM D, YYYY')}
          </Text>
        </View>
        <View style={{ height: 413 }}>
          <TarotCard
            cardName={'cups'}
            rightSideUp={true}
            onCardFlip={onCardFlip}
          />
        </View>
        {displayInfo && (
          <Animated.View
            style={{ ...styles.descriptionContainer, opacity: fadeAnim }}
          >
            <Text style={styles.header}>Eight of Pentacles</Text>
            <View style={styles.keyTermsContainer}>
              <Text style={styles.keyTerms}>Good Fortune</Text>
              <Text style={styles.keyTerms}>Change</Text>
              <Text style={styles.keyTerms}>Power in Growth</Text>
            </View>
            <Text style={styles.description}>
              You’ve drawn the Eight of Pentacles right-side up. Look out for
              times ahead with lots of potential for change. The promise of good
              fortune lingers. But remember, not everything is always as it
              seems. Great change can also bring great power, but with power
              comes responsibility.
            </Text>
          </Animated.View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default DailyCard;
