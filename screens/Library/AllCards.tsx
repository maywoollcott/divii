import React, { useContext, useEffect, useState } from 'react';
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
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import NonFlipTarotCard from '../../components/TarotCard/NonFlipTarotCard';
import { getAllCards } from '../../apiService/data';
import { styles } from './AllCards.style';
import { COLORS } from '../../globalStyles';
import { Card } from '../../types';
import AppLoading from '../AppLoading/AppLoading';
import { Context } from '../../Context';

const AllCards = () => {
  const [allCardsData, setAllCardsData] = useState<Card[] | null>(null);
  const [searchInput, setSearchInput] = useState<String>('');
  const [filteredCards, setFilteredCards] = useState<Card[] | null>(null);
  const [displaySearchIcon, setDisplaySearchIcon] = useState<boolean>(true);

  const navigation = useNavigation();
  const context = useContext(Context);

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    context.setIsLoading(true);
    const fetchCards = async () => {
      const cards = await getAllCards();
      setAllCardsData(cards);
      setFilteredCards(cards);
    };

    fetchCards();
    setTimeout(() => {
      context.setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const tempFilteredCards = allCardsData?.filter((card) =>
      card.name.toLowerCase().includes(searchInput.toString())
    );
    if (tempFilteredCards) setFilteredCards(tempFilteredCards);
  }, [searchInput]);

  const navigateToCard = (card: Card) => {
    navigation.navigate('CardDetails', card);
  };

  if (context.isLoading) {
    return <AppLoading />;
  }
  return (
    <View style={styles.screenContainer}>
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
          <FlatList
            initialNumToRender={4}
            data={filteredCards}
            contentContainerStyle={styles.cardsContainer}
            keyExtractor={(item) => item.name}
            numColumns={2}
            renderItem={({ item, index }) => (
              <NonFlipTarotCard
                card={item}
                width={170}
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

export default AllCards;
