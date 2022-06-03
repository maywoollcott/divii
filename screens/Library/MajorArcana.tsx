import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import NonFlipTarotCard from '../../components/TarotCard/NonFlipTarotCard';
import { getAllCards } from '../../apiService/data';
import { styles } from './MajorArcana.style';
import { COLORS } from '../../globalStyles';
import { Card } from '../../types';

const { width } = Dimensions.get('window');

const MajorArcana = () => {
  const [allCardsData, setAllCardsData] = useState<Card[] | null>(null);
  const [searchInput, setSearchInput] = useState<String>('');
  const [filteredCards, setFilteredCards] = useState<Card[] | null>(null);
  const [displaySearchIcon, setDisplaySearchIcon] = useState<boolean>(true);

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchCards = async () => {
      const cards = await getAllCards();
      const majorArcanaCards = cards.filter(
        (card: Card) => card.arcana === 'Major'
      );
      setAllCardsData(majorArcanaCards);
      setFilteredCards(majorArcanaCards);
    };

    fetchCards();
  }, []);

  useEffect(() => {
    const tempFilteredCards = allCardsData?.filter((card) =>
      card.name.toLowerCase().includes(searchInput.toString())
    );
    if (tempFilteredCards) setFilteredCards(tempFilteredCards);
  }, [searchInput]);

  const navigateToCard = (card: Card) => {
    console.log(card);
    navigation.navigate('CardDetails', card);
  };

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.touchableContainer}>
          <TouchableOpacity onPress={goBack} style={styles.backArrowContainer}>
            <Feather name='arrow-left' size={28} color={COLORS.grayBlue} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.header}>Major</Text>
            <Text style={styles.header}>Arcana</Text>
          </View>
          {/* <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              Also known as the Trump Cards, the Major Arcana cards include 21
              numbered cards and 1 unnumbered card (the Fool). The Fool is the
              main character of the Major Arcana and makes his journey through
              each of the cards, meeting new teachers and learning new life
              lessons along the way, and eventually reaching the completion of
              his journey with the World card. This is known as the Fool's
              Journey and is a helpful way of understanding the story line of
              the Major Arcana Tarot card meanings.
            </Text>
          </View> */}
          <View style={styles.inputContainer}>
            <TextInput
              onFocus={() => setDisplaySearchIcon(false)}
              onBlur={() => setDisplaySearchIcon(true)}
              onChangeText={(text) => setSearchInput(text.toLowerCase())}
              style={styles.input}
            />
            {displaySearchIcon && searchInput === '' ? (
              <AntDesign
                name='search1'
                size={24}
                color={COLORS.grayBlue}
                style={styles.searchIcon}
              />
            ) : null}
          </View>
        </View>
        {allCardsData !== null && (
          <FlatList
            initialNumToRender={4}
            data={filteredCards}
            contentContainerStyle={styles.cardsContainer}
            keyExtractor={(item) => item.name}
            numColumns={2}
            renderItem={({ item, index }) => (
              <NonFlipTarotCard
                card={item}
                width={width * 0.45}
                key={index}
                onPress={() => navigateToCard(item)}
              />
            )}
          ></FlatList>
        )}
      </SafeAreaView>
    </View>
  );
};

export default MajorArcana;
