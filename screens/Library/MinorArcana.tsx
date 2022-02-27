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
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import NonFlipTarotCard from '../../components/TarotCard/NonFlipTarotCard';
import { getAllCards } from '../../apiService/data';
import { styles } from './MinorArcana.style';
import { COLORS } from '../../globalStyles';
import { Card } from '../../types';

const { width, height } = Dimensions.get('window');

const MinorArcana = () => {
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
      const MinorArcanaCards = cards.filter((card: Card) => card.arcana === 'Minor');
      setAllCardsData(MinorArcanaCards);
      setFilteredCards(MinorArcanaCards);
    };

    fetchCards();
  }, []);

  useEffect(() => {
    const tempFilteredCards = allCardsData?.filter((card) => card.name.toLowerCase().includes(searchInput.toString()));
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
            <Text style={styles.header}>Minor</Text>
            <Text style={styles.header}>Arcana</Text>
          </View>
          {/* <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              The 56 Minor Arcana cards reflect the trials and tribulations that
              we experience on a daily basis. Even though the Minor Arcana cards
              are called ‘minor', it doesn't mean that these Tarot cards won't
              have a significant impact in your life. These Tarot cards relate
              to what's happening in your daily life, and can offer insight into
              how your present situation is affecting you and what steps you
              need to take to manifest your goals.
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
              <AntDesign name='search1' size={24} color={COLORS.grayBlue} style={styles.searchIcon} />
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
              <NonFlipTarotCard card={item} width={width * 0.45} key={index} onPress={() => navigateToCard(item)} />
            )}
          ></FlatList>
        )}
      </SafeAreaView>
    </View>
  );
};

export default MinorArcana;
