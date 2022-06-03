import React from 'react';
import { Dimensions, View } from 'react-native';
import { styles } from './OneCardSpreadStyle';
import { TarotCard } from '../TarotCard/TarotCard';

const { width } = Dimensions.get('window');
interface IOneCardSpread {
  spreadData: Array<any>;
  upright: Array<any>;
  onCardFlip: (arg0: number) => void;
}

export const OneCardSpread: React.FC<IOneCardSpread> = ({
  spreadData,
  upright,
  onCardFlip,
}) => {
  return (
    <View style={styles.spreadContainer}>
      <View style={styles.cardContainer}>
        <TarotCard
          image={spreadData[0].image}
          rightSideUp={upright[0]}
          onCardFlip={() => onCardFlip(0)}
          width={width * 0.7}
        />
      </View>
    </View>
  );
};
