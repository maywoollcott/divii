import React, { useContext } from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import { styles } from './SharingCard.style';
import { Card } from '../../types';
import { Context } from '../../Context';

const { width } = Dimensions.get('window');
interface ISingleSharingCardProps {
  cards: Card[];
  spread: string;
  upright: boolean[];
}

const SingleSharingCard: React.FC<ISingleSharingCardProps> = ({
  cards,
  spread,
  upright,
}) => {
  const context = useContext(Context);

  const directionalText = () => {
    if (upright[0]) {
      return '(Upright)';
    } else {
      return '(Reversed)';
    }
  };

  return (
    <>
      <View style={styles.sharingCardContainer}>
        <Text style={styles.headerText}>
          {context.currentUser.name}'s {spread}
        </Text>
        <View style={styles.centralContainer}>
          <View style={upright[0] ? styles.card : styles.reversedCard}>
            <Image
              style={{ width: width * 0.34, height: width * 0.56 }}
              source={{ uri: cards[0]?.image }}
            />
          </View>
          <View style={styles.keyTermsContainer}>
            {upright[0]
              ? cards[0].uprightKeyTerms.map((keyTerm) => (
                  <Text style={styles.keyTermsText} key={keyTerm}>
                    {keyTerm}
                  </Text>
                ))
              : cards[0].reversedKeyTerms.map((keyTerm) => (
                  <Text style={styles.keyTermsText} key={keyTerm}>
                    {keyTerm}
                  </Text>
                ))}
          </View>
        </View>
        <Text style={styles.cardText}>{cards[0].name}</Text>
        <Text style={styles.directionalText}>{directionalText()}</Text>
      </View>
      <View style={styles.diviiLabelContainer}>
        <Text style={styles.diviiText}>divii</Text>
      </View>
    </>
  );
};

export default SingleSharingCard;
