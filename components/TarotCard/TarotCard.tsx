import React, { useState } from 'react';
import { TouchableWithoutFeedback, Animated, View } from 'react-native';
import FlipCard from 'react-native-flip-card';
import { styles } from './TarotCard.style';
import AutoHeightImage from 'react-native-auto-height-image';
import { images, cardDisplays } from '../../assets/images/imagesIndex';

interface ITarotProps {
  cardName: string;
  rightSideUp: boolean;
  onCardFlip: () => void;
}

export const TarotCard: React.FC<ITarotProps> = ({
  cardName,
  rightSideUp,
  onCardFlip,
}) => {
  return (
    <FlipCard flipHorizontal={true} flipVertical={false} onFlipEnd={onCardFlip}>
      <View style={styles.card}>
        <AutoHeightImage
          source={images.sunBack}
          width={250}
          style={styles.cardContainer}
        />
      </View>
      <View style={styles.card}>
        <AutoHeightImage
          source={cardDisplays['Eight of Pentacles']}
          width={250}
          style={styles.cardContainer}
        />
      </View>
    </FlipCard>
  );
};
