import React from 'react';
import { View } from 'react-native';
import { styles } from './pastPresentFutureSpread.style';
import { TarotCard } from '../TarotCard/TarotCard';

interface IPastPresentFutureSpreadProps {
  spreadData: Array<any>;
  upright: Array<any>;
  onCardFlip: (arg0: number) => void;
}

export const PastPresentFutureSpread: React.FC<IPastPresentFutureSpreadProps> =
  ({ spreadData, upright, onCardFlip }) => {
    return (
      <View style={styles.spreadContainer}>
        <View style={styles.cardContainer}>
          <TarotCard
            image={spreadData[0].image}
            rightSideUp={upright[0]}
            onCardFlip={() => onCardFlip(0)}
            width={110}
          />
        </View>
        <View style={styles.cardContainer}>
          <TarotCard
            image={spreadData[1].image}
            rightSideUp={upright[1]}
            onCardFlip={() => onCardFlip(1)}
            width={110}
          />
        </View>
        <View style={styles.cardContainer}>
          <TarotCard
            image={spreadData[2].image}
            rightSideUp={upright[2]}
            onCardFlip={() => onCardFlip(2)}
            width={110}
          />
        </View>
      </View>
    );
  };
