import React from 'react';
import { Dimensions, View } from 'react-native';
import { styles } from './ThreeCardSpread.style';
import { TarotCard } from '../TarotCard/TarotCard';

const { width } = Dimensions.get('window');

interface IThreeCardSpread {
  spreadData: Array<any>;
  upright: Array<any>;
  onCardFlip: (arg0: number) => void;
}

export const ThreeCardSpread: React.FC<IThreeCardSpread> = ({
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
          width={width * 0.29}
        />
      </View>
      <View style={styles.cardContainer}>
        <TarotCard
          image={spreadData[1].image}
          rightSideUp={upright[1]}
          onCardFlip={() => onCardFlip(1)}
          width={width * 0.29}
        />
      </View>
      <View style={styles.cardContainer}>
        <TarotCard
          image={spreadData[2].image}
          rightSideUp={upright[2]}
          onCardFlip={() => onCardFlip(2)}
          width={width * 0.29}
        />
      </View>
    </View>
  );
};
