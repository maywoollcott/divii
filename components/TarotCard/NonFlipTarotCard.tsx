import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AutoHeightImage from 'react-native-auto-height-image';
import { styles } from './NonFlipTarotCard.style';
import { Card } from '../../types';

interface INonFlipTarotCardProps {
  card: Card;
  width: number;
  onPress: any;
}

const NonFlipTarotCard: React.FC<INonFlipTarotCardProps> = ({
  card,
  width,
  onPress,
}) => {
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={styles.card}>
        <AutoHeightImage
          source={{ uri: card.image }}
          width={width}
          style={{
            marginVertical: 15,
            borderRadius: 5,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NonFlipTarotCard;
