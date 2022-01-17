import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AutoHeightImage from 'react-native-auto-height-image';
import FastImage from 'react-native-fast-image';
import { styles } from './NonFlipTarotCard.style';
import { Card } from '../../types';

interface INonFlipTarotCardProps {
  card: Card;
  width: number;
  onPress: any;
  height?: number;
}

const NonFlipTarotCard: React.FC<INonFlipTarotCardProps> = ({
  card,
  width,
  height,
  onPress,
}) => {
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={styles.card}>
        <FastImage
          style={{
            width: width,
            height: height,
            marginVertical: 15,
            borderRadius: 5,
          }}
          source={{ uri: card.image, priority: FastImage.priority.high }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NonFlipTarotCard;
