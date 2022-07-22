import React, { useState, useRef, useEffect, useContext } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Animated,
  TouchableOpacity,
  Dimensions,
  Platform,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { Context } from '../../Context';
import { styles } from './PersonalCard.style';
import { TarotCard } from '../../components/TarotCard/TarotCard';
import { COLORS } from '../../globalStyles';
import AppLoading from '../AppLoading/AppLoading';
import Share from 'react-native-share';
import { captureRef } from 'react-native-view-shot';
import { eventTypes, personalCardEvents } from '../../analytics/trackedEvents';
import { useAnalytics } from '@segment/analytics-react-native';

const { width } = Dimensions.get('window');

interface IPersonalCardProps {
  route?: PersonalCardParams;
}

export type PersonalCardParams = {
  params: {
    personalCardNumber: string;
    name: string;
    personalNumber: string;
    cardBackNumber: string;
  };
};

const PersonalCard: React.FC<IPersonalCardProps> = ({ route }) => {
  const navigation = useNavigation();
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const context = useContext(Context);
  const { track, identify, screen } = useAnalytics();

  const [instagramAccess, setInstagramAccess] = useState(false);

  const viewRef = useRef();

  useEffect(() => {
    identify(context.currentUser._id, {
      name: context.currentUser.name,
      email: context.currentUser.email,
      dateJoined: context.currentUser.dateJoined,
    });
    screen(personalCardEvents.screenName);
    if (Platform.OS === 'ios') {
      Linking.canOpenURL('instagram://').then((val) => setInstagramAccess(val));
    } else {
      Share.isPackageInstalled('com.instagram.android').then(
        ({ isInstalled }) => setInstagramAccess(isInstalled)
      );
    }
  }, []);

  const goBack = () => {
    track(personalCardEvents.backButton, {
      type: eventTypes.buttonPress,
      screen: personalCardEvents.screenName,
    });
    navigation.goBack();
  };
  const onCardFlip = () => {
    track(personalCardEvents.flip, {
      type: eventTypes.flip,
      screen: personalCardEvents.screenName,
    });
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
    track(personalCardEvents.instagram, {
      type: eventTypes.buttonPress,
      screen: personalCardEvents.screenName,
    });
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
    track(personalCardEvents.generalShare, {
      type: eventTypes.buttonPress,
      screen: personalCardEvents.screenName,
    });
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
            <TouchableOpacity
              onPress={goBack}
              style={styles.backArrowContainer}
            >
              <Feather name='arrow-left' size={28} color={COLORS.grayBlue} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              height: '97%',
              justifyContent: 'center',
              marginTop: 28,
            }}
          >
            <View ref={viewRef} style={{ height: width * 1.15 }}>
              <TarotCard
                image={`https://diviiimages.s3.us-east-2.amazonaws.com/personalcards/card${route?.params.personalCardNumber}.png`}
                rightSideUp={true}
                onCardFlip={onCardFlip}
                width={width * 0.7}
                isPersonalCard={true}
                name={route?.params.name}
                number={route?.params.personalNumber}
                backNumber={route?.params.cardBackNumber}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.basicButton}
                onPress={instagramStoryHandler}
              >
                <FontAwesome
                  name='instagram'
                  size={width * 0.15}
                  color={COLORS.grayBlue}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={generalShareHandler}>
                <Feather
                  name='share'
                  size={width * 0.13}
                  color={COLORS.grayBlue}
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default PersonalCard;
