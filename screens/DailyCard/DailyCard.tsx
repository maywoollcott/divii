import React, { useState, useRef, useEffect } from 'react';
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
  ScrollView,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AutoHeightImage from 'react-native-auto-height-image';
import { Context } from '../../Context';
import { styles } from './DailyCard.style';
import { images } from '../../assets/images/imagesIndex';
import { TarotCard } from '../../components/TarotCard/TarotCard';

const DailyCard = () => {
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const onCardFlip = () => {
    setDisplayInfo(true);
    console.log(displayInfo);
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 7000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Your Card of the Day</Text>
          <Text style={styles.secondaryHeader}>Tuesday November 4th, 2021</Text>
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
