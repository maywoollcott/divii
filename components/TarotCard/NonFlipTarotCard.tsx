import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
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
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={styles.card}>
        <Image
          style={{
            marginVertical: 15,
            borderRadius: 5,
            width: width,
            height: width * 1.65,
          }}
          source={{ uri: card.image }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NonFlipTarotCard;
