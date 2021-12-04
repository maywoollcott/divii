import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Animated,
  TouchableOpacity,
  TextInput,
  FlatList,
  ListRenderItem,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import NonFlipTarotCard from '../../components/TarotCard/NonFlipTarotCard';
import { getAllCards } from '../../apiService/data';
import { styles } from './AllCards.style';
import { COLORS } from '../../globalStyles';
import { Card } from '../../types';

const AllCards = () => {
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
      console.log(cards[0]);
      setAllCardsData(cards);
      setFilteredCards(cards);
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
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.touchableContainer}>
          <TouchableOpacity onPress={goBack} style={styles.backArrowContainer}>
            <Feather name='arrow-left' size={28} color={COLORS.grayBlue} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>All Cards</Text>
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
          <View style={styles.cardsContainer}>
            {filteredCards?.map((card) => {
              return (
                <NonFlipTarotCard
                  card={card}
                  width={170}
                  key={card.name}
                  onPress={() => navigateToCard(card)}
                />
              );
            })}
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default AllCards;
