import React, { useState, useRef, useEffect, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Animated,
  TouchableOpacity,
  Button,
  Dimensions,
  Platform,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { getCardByNumber, saveReading, getReadingsByUser } from '../../apiService/data';
import { getCardNumbers } from '../../utils/pickRandomCard';
import { Context } from '../../Context';
import { styles } from './PersonalCard.style';
import { TarotCard } from '../../components/TarotCard/TarotCard';
import { COLORS } from '../../globalStyles';
import AppLoading from '../AppLoading/AppLoading';
import { ShareModal } from '../../components/Modal/ShareModal';
import Share from 'react-native-share';
import { captureRef } from 'react-native-view-shot';

const { width, height } = Dimensions.get('window');

interface IPersonalCardProps {
  route?: PersonalCardParams;
}

export type PersonalCardParams = {
  params: {
    personalCardNumber: string;
    name: string;
    personalNumber: string;
  };
};

const PersonalCard: React.FC<IPersonalCardProps> = ({ route }) => {
  const navigation = useNavigation();
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const context = useContext(Context);

  const [instagramAccess, setInstagramAccess] = useState(false);

  const viewRef = useRef();

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Linking.canOpenURL('instagram://').then((val) => setInstagramAccess(val));
    } else {
      Share.isPackageInstalled('com.instagram.android').then(({ isInstalled }) => setInstagramAccess(isInstalled));
    }
  }, []);

  const goBack = () => {
    navigation.goBack();
  };
  const onCardFlip = () => {
    setDisplayInfo(true);
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

  const instagramStoryHandler = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 1,
      });

      const shareOptions = {
        social: Share.Social.INSTAGRAM_STORIES,
        backgroundBottomColor: COLORS.grayBlue,
        backgroundTopColor: COLORS.parchment,
        stickerImage: uri,
      };

      if (instagramAccess) {
        await Share.shareSingle(shareOptions);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const generalShareHandler = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 1,
      });
      await Share.open({ url: uri });
    } catch (error) {
      console.error(error);
    }
  };

  if (context.isLoading) {
    return <AppLoading />;
  }
  return (
    <View style={styles.bounceContainer}>
      <ScrollView contentContainerStyle={styles.screenContainer}>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.touchableContainer}>
            <TouchableOpacity onPress={goBack} style={styles.backArrowContainer}>
              <Feather name='arrow-left' size={28} color={COLORS.grayBlue} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', height: '97%', justifyContent: 'center', marginTop: 28 }}>
            <View ref={viewRef} style={{ height: width * 1.15 }}>
              <TarotCard
                image={`https://diviiimages.s3.us-east-2.amazonaws.com/personalcards/card${route?.params.personalCardNumber}.png`}
                rightSideUp={true}
                onCardFlip={onCardFlip}
                width={width * 0.7}
                isPersonalCard={true}
                name={route?.params.name}
                number={route?.params.personalNumber}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.basicButton} onPress={instagramStoryHandler}>
                <FontAwesome name='instagram' size={width * 0.15} color={COLORS.grayBlue} />
              </TouchableOpacity>

              <TouchableOpacity onPress={generalShareHandler}>
                <Feather name='share' size={width * 0.13} color={COLORS.grayBlue} />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default PersonalCard;
