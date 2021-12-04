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
import { getCardByNumber } from '../../apiService/data';
import { pickRandomCard } from '../../utils/pickRandomCard';
import { Context } from '../../Context';
import { styles } from './CardDetails.style';
import { TarotCard } from '../../components/TarotCard/TarotCard';
import { COLORS } from '../../globalStyles';
import { Card } from '../../types';
import NonFlipTarotCard from '../../components/TarotCard/NonFlipTarotCard';

interface ICardDetailsProps {
  route: ICardParams;
}

interface ICardParams {
  params: Card;
}

const CardDetails: React.FC<ICardDetailsProps> = ({ route }) => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState<String>('General');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const now = moment();

  const goBack = () => {
    navigation.goBack();
  };

  const animate = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    setTimeout(animate, 1000);
  }, [fadeAnim]);

  const onTabSelect = (tab: string) => {
    setSelectedTab(tab);
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
          <Text style={styles.header}>{route.params.name}</Text>
          <Text style={styles.secondaryHeader}>
            {route.params.arcana} Arcana
          </Text>
        </View>
        <View>
          <NonFlipTarotCard
            card={route.params}
            width={200}
            onPress={() => {}}
          />
        </View>
        <View style={styles.tabs}>
          <TouchableOpacity onPress={() => onTabSelect('General')}>
            <Text
              style={
                selectedTab === 'General'
                  ? styles.tabTextSelected
                  : styles.tabText
              }
            >
              General
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onTabSelect('Upright')}>
            <Text
              style={
                selectedTab === 'Upright'
                  ? styles.tabTextSelected
                  : styles.tabText
              }
            >
              Upright
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onTabSelect('Reversed')}>
            <Text
              style={
                selectedTab === 'Reversed'
                  ? styles.tabTextSelected
                  : styles.tabText
              }
            >
              Reversed
            </Text>
          </TouchableOpacity>
        </View>
        {selectedTab === 'General' && (
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              {route.params.generalDescription}
            </Text>
          </View>
        )}
        {selectedTab === 'Upright' && (
          <View style={styles.descriptionContainer}>
            <View style={styles.keyTermsContainer}>
              <Text style={styles.keyTerms}>
                {route.params.uprightKeyTerms[0]}
              </Text>
              <Text style={styles.keyTerms}>
                {route.params.uprightKeyTerms[1]}
              </Text>
              <Text style={styles.keyTerms}>
                {route.params.uprightKeyTerms[2]}
              </Text>
            </View>
            <Text style={styles.description}>
              {route.params.uprightDescription}
            </Text>
          </View>
        )}
        {selectedTab === 'Reversed' && (
          <View style={styles.descriptionContainer}>
            <View style={styles.keyTermsContainer}>
              <Text style={styles.keyTerms}>
                {route.params.reversedKeyTerms[0]}
              </Text>
              <Text style={styles.keyTerms}>
                {route.params.reversedKeyTerms[1]}
              </Text>
              <Text style={styles.keyTerms}>
                {route.params.reversedKeyTerms[2]}
              </Text>
            </View>
            <Text style={styles.description}>
              {route.params.reversedDescription}
            </Text>
          </View>
        )}
        {/* {displayInfo && dailyCardData && (
          <Animated.View
            style={{ ...styles.descriptionContainer, opacity: fadeAnim }}
          >
            <Text style={styles.header}>{dailyCardData.name}</Text>
            <Text style={styles.reversed}>
              {upright ? 'Upright' : '(Reversed)'}
            </Text>
            <View style={styles.keyTermsContainer}>
              <Text style={styles.keyTerms}>
                {upright
                  ? dailyCardData.uprightKeyTerms[0]
                  : dailyCardData.reversedKeyTerms[0]}
              </Text>
              <Text style={styles.keyTerms}>
                {upright
                  ? dailyCardData.uprightKeyTerms[1]
                  : dailyCardData.reversedKeyTerms[1]}
              </Text>
              <Text style={styles.keyTerms}>
                {upright
                  ? dailyCardData.uprightKeyTerms[2]
                  : dailyCardData.reversedKeyTerms[2]}
              </Text>
            </View>
            <Text style={styles.description}>
              {upright
                ? dailyCardData.uprightDescription
                : dailyCardData.reversedDescription}
            </Text>
          </Animated.View>
        )} */}
      </SafeAreaView>
    </ScrollView>
  );
};

export default CardDetails;
