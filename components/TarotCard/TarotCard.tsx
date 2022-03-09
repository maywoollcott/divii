import React, { useState } from 'react';
import { TouchableWithoutFeedback, Animated, View, Text, Image } from 'react-native';
import FlipCard from 'react-native-flip-card';
import { styles } from './TarotCard.style';
import * as Images from '../../assets/images/imagesIndex';

interface ITarotProps {
  image: string;
  rightSideUp: boolean;
  width: number;
  onCardFlip: () => void;
  isPersonalCard?: boolean;
  name?: string;
  number?: string;
  backNumber?: string;
}

export const TarotCard: React.FC<ITarotProps> = ({
  image,
  rightSideUp,
  onCardFlip,
  width,
  isPersonalCard,
  name,
  number,
  backNumber,
}) => {
  Image.prefetch(image);
  return (
    <FlipCard flipHorizontal={true} flipVertical={false} onFlipEnd={onCardFlip}>
      <View style={styles.card}>
        <Image
          source={backNumber ? Images.images[backNumber] : Images.images.sunBack}
          width={width}
          height={width * 1.65}
          style={
            rightSideUp
              ? { ...styles.cardContainer, width: width, height: width * 1.65 }
              : { ...styles.reverseCardContainer, width: width, height: width * 1.65 }
          }
        />
      </View>
      <View style={styles.card}>
        <Image
          source={{ uri: image }}
          style={
            rightSideUp
              ? { ...styles.cardContainer, width: width, height: width * 1.65 }
              : { ...styles.reverseCardContainer, width: width, height: width * 1.65 }
          }
          fallbackSource={Images.images.sunBack}
        />
        {isPersonalCard && <Text style={styles.personalName}>The {name} Card</Text>}
        {isPersonalCard && <Text style={styles.personalNumber}>{number}</Text>}
      </View>
    </FlipCard>
  );
};
