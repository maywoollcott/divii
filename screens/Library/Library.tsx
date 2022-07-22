import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAllSpreads } from '../../apiService/data';
import { styles } from './Library.style';
import { images } from '../../assets/images/imagesIndex';
import { useAnalytics } from '@segment/analytics-react-native';
import { eventTypes, libraryIndexEvents } from '../../analytics/trackedEvents';
import { Context } from '../../Context';

const Library = () => {
  const navigation = useNavigation();
  const [spreads, setSpreads] = useState<Array<any> | null>(null);
  const context = useContext(Context);

  const { track, identify, screen } = useAnalytics();

  const navigateTo = (screen: string) => {
    track(screen, {
      type: eventTypes.buttonPress,
      screen: libraryIndexEvents.screenName,
    });
    navigation.navigate(screen);
  };

  //why am i doing this?
  useEffect(() => {
    identify(context.currentUser?._id, {
      name: context.currentUser?.name,
      email: context.currentUser?.email,
      dateJoined: context.currentUser?.dateJoined,
    });
    screen(libraryIndexEvents.screenName);
  }, []);

  return (
    <View style={styles.bounceContainer}>
      <ScrollView contentContainerStyle={styles.screenContainer}>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.leftCurtainContainer}>
            <Image source={images.leftCurtain} style={styles.leftCurtain} />
            <Image source={images.rightCurtain} style={styles.rightCurtain} />
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
              onPress={() => navigateTo('Suits')}
            >
              <Text style={styles.touchableText}>Suits</Text>
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
              onPress={() => navigateTo('AllCards')}
            >
              <Text style={styles.touchableText}>All Cards</Text>
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
