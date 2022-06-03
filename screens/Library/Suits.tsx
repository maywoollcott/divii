import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import NonFlipTarotCard from '../../components/TarotCard/NonFlipTarotCard';
import { getAllCards } from '../../apiService/data';
import { styles } from './Suits.style';
import { COLORS } from '../../globalStyles';
import { Card } from '../../types';

const { width } = Dimensions.get('window');

const Suits = () => {
  const [allCardsData, setAllCardsData] = useState<Card[] | null>(null);
  const [displayWands, setDisplayWands] = useState<boolean>(false);
  const [displayCups, setDisplayCups] = useState<boolean>(false);
  const [displaySwords, setDisplaySwords] = useState<boolean>(false);
  const [displayPentacles, setDisplayPentacles] = useState<boolean>(false);

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchCards = async () => {
      const cards = await getAllCards();
      setAllCardsData(cards);
    };

    fetchCards();
  }, []);

  const filterBySuit = (suit: string) => {
    const filtered = allCardsData?.filter((card) => card.suit == suit);
    console.log(filtered);
    if (allCardsData) console.log(allCardsData[22].suit);
    return filtered;
  };

  const navigateToCard = (card: Card) => {
    console.log(card);
    navigation.navigate('CardDetails', card);
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
          <View style={styles.headerTextContainer}>
            <Text style={styles.header}>Suits</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.headerDescription}>
              Each Minor Arcana suit shares properties with one of the elements
              of the Zodiac (fire, earth, air, and water). In turn, each suit is
              associated with the three signs ruled by their corresponding
              element. If you're still getting familiar with the meaning behind
              the Minor Arcana cards (but already have the basics of astrology
              down pat) this parallel may offer some clarity around the suits'
              realm of influence.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.expandable}
          onPress={() => setDisplayWands(!displayWands)}
        >
          <Text style={styles.expandableText}>Wands</Text>
          {displayWands && <View style={styles.dividerLine}></View>}
          <View style={styles.rightArrowIcon}>
            {displayWands ? (
              <AntDesign name='down' size={24} color={COLORS.grayBlue} />
            ) : (
              <AntDesign name='right' size={24} color={COLORS.grayBlue} />
            )}
          </View>
          {displayWands && (
            <View style={styles.cardsContainer}>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                  The Suit of Wands Tarot card meanings are associated with
                  primal energy, spirituality, inspiration, determination,
                  strength, intuition, creativity, ambition and expansion,
                  original thought and the seeds through which life springs
                  forth. The Suit of Wands is associated with the element of
                  Fire. Fire is hot, wild, unpredictable, and energetic. It can
                  be creative in helping us to cook food or build tools, or it
                  can be destructive, like a devastating bush fire or house
                  fire.
                </Text>
              </View>
              {filterBySuit('Wands')?.map((card) => {
                return (
                  <NonFlipTarotCard
                    card={card}
                    width={width * 0.33}
                    key={card.name}
                    onPress={() => navigateToCard(card)}
                  />
                );
              })}
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.expandable}
          onPress={() => setDisplayCups(!displayCups)}
        >
          <Text style={styles.expandableText}>Cups</Text>
          {displayCups && <View style={styles.dividerLine}></View>}
          <View style={styles.rightArrowIcon}>
            {displayCups ? (
              <AntDesign name='down' size={24} color={COLORS.grayBlue} />
            ) : (
              <AntDesign name='right' size={24} color={COLORS.grayBlue} />
            )}
          </View>
          {displayCups && (
            <View style={styles.cardsContainer}>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                  The Suit of Cups represents your feelings, emotions, intuition
                  and creativity. The Cups cards often appear in Tarot readings
                  about relationships and your emotional connection with
                  yourself and others.
                </Text>
              </View>
              {filterBySuit('Cups')?.map((card) => {
                return (
                  <NonFlipTarotCard
                    card={card}
                    width={width * 0.33}
                    key={card.name}
                    onPress={() => navigateToCard(card)}
                  />
                );
              })}
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.expandable}
          onPress={() => setDisplaySwords(!displaySwords)}
        >
          <Text style={styles.expandableText}>Swords</Text>
          {displaySwords && <View style={styles.dividerLine}></View>}
          <View style={styles.rightArrowIcon}>
            {displaySwords ? (
              <AntDesign name='down' size={24} color={COLORS.grayBlue} />
            ) : (
              <AntDesign name='right' size={24} color={COLORS.grayBlue} />
            )}
          </View>
          {displaySwords && (
            <View style={styles.cardsContainer}>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                  The Suit of Swords Tarot cards deal with the mental level of
                  consciousness that is centered around the mind and the
                  intellect. Swords mirror the quality of mind present in your
                  thoughts, attitudes, and beliefs. Swords are often
                  double-edged and in this way the Suit of Swords symbolises the
                  fine balance between intellect and power and how these two
                  elements can be used for good or evil. As such, the Swords
                  must be balanced by spirit (Wands) and feeling (Cups) to have
                  the most positive effect.
                </Text>
              </View>
              {filterBySuit('Swords')?.map((card) => {
                return (
                  <NonFlipTarotCard
                    card={card}
                    width={width * 0.33}
                    key={card.name}
                    onPress={() => navigateToCard(card)}
                  />
                );
              })}
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.expandable}
          onPress={() => setDisplayPentacles(!displayPentacles)}
        >
          <Text style={styles.expandableText}>Pentacles</Text>
          {displayPentacles && <View style={styles.dividerLine}></View>}
          <View style={styles.rightArrowIcon}>
            {displayPentacles ? (
              <AntDesign name='down' size={24} color={COLORS.grayBlue} />
            ) : (
              <AntDesign name='right' size={24} color={COLORS.grayBlue} />
            )}
          </View>
          {displayPentacles && (
            <View style={styles.cardsContainer}>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                  The Suit of Pentacles Tarot cards deal with the physical or
                  external level of consciousness and thus mirror the outer
                  situations of your health, finances, work, and creativity.
                  They have to do with what we make of our outer surroundings –
                  how we create it, shape it, transform it and grow it. On a
                  more esoteric level, Pentacles are associated with the ego,
                  self-esteem and self-image.
                </Text>
              </View>
              {filterBySuit('Pentacles')?.map((card) => {
                return (
                  <NonFlipTarotCard
                    card={card}
                    width={width * 0.33}
                    key={card.name}
                    onPress={() => navigateToCard(card)}
                  />
                );
              })}
            </View>
          )}
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Suits;
