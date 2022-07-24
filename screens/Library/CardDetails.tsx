import React, { useState, useRef, useEffect, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Feather } from '@expo/vector-icons';
import { styles } from './CardDetails.style';
import { COLORS } from '../../globalStyles';
import { Card } from '../../types';
import NonFlipTarotCard from '../../components/TarotCard/NonFlipTarotCard';
import { useAnalytics } from '@segment/analytics-react-native';
import { eventTypes, cardDetailsEvents } from '../../analytics/trackedEvents';
import { Context } from '../../Context';

const { width } = Dimensions.get('window');
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

  const context = useContext(Context);
  const { track, identify, screen } = useAnalytics();

  const goBack = () => {
    track(cardDetailsEvents.backButton, {
      type: eventTypes.buttonPress,
      screen: cardDetailsEvents.screenName,
    });
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
    identify(context.currentUser?._id, {
      name: context.currentUser?.name,
      email: context.currentUser?.email,
      dateJoined: context.currentUser?.dateJoined,
    });
    screen(cardDetailsEvents.screenName);
  }, []);

  useEffect(() => {
    setTimeout(animate, 1000);
  }, [fadeAnim]);

  const onTabSelect = (tab: string) => {
    track(`${cardDetailsEvents.selectTab} ${tab}`, {
      type: eventTypes.buttonPress,
      screen: cardDetailsEvents.screenName,
    });
    setSelectedTab(tab);
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
            <Text style={styles.header}>{route.params.name}</Text>
            <Text style={styles.secondaryHeader}>
              {route.params.arcana} Arcana
            </Text>
          </View>
          <View>
            <NonFlipTarotCard
              card={route.params}
              width={width * 0.55}
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
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default CardDetails;
