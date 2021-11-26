import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  Animated,
  View,
  Text,
  Image,
} from 'react-native';
import FlipCard from 'react-native-flip-card';
import { styles } from './TarotCard.style';
import AutoHeightImage from 'react-native-auto-height-image';
import * as Images from '../../assets/images/imagesIndex';

interface ITarotProps {
  image: string;
  rightSideUp: boolean;
  width: number;
  onCardFlip: () => void;
}

export const TarotCard: React.FC<ITarotProps> = ({
  image,
  rightSideUp,
  onCardFlip,
  width,
}) => {
  Image.prefetch(image);
  return (
    <FlipCard flipHorizontal={true} flipVertical={false} onFlipEnd={onCardFlip}>
      <View style={styles.card}>
        <AutoHeightImage
          source={Images.images.sunBack}
          width={width}
          style={
            rightSideUp ? styles.cardContainer : styles.reverseCardContainer
          }
        />
      </View>
      <View style={styles.card}>
        <AutoHeightImage
          source={{ uri: image }}
          width={width}
          style={
            rightSideUp ? styles.cardContainer : styles.reverseCardContainer
          }
          fallbackSource={Images.images.sunBack}
        />
      </View>
    </FlipCard>
  );
};
