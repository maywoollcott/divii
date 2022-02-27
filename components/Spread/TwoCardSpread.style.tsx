import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../../globalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  spreadContainer: {
    height: width * 0.7,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer: {
    width: width * 0.35,
    height: width * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
