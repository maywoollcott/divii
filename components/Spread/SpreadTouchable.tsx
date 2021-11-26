import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './SpreadTouchable.style';

interface ISpreadTouchableProps {
  name: string;
  onPress: () => void;
}

export const SpreadTouchable: React.FC<ISpreadTouchableProps> = ({
  name,
  onPress,
}) => {
  return (
    <View style={styles.actionCardContainer}>
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <Text style={styles.spreadText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};
