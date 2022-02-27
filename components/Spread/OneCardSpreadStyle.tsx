import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../../globalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  spreadContainer: {
    height: width * 1.15,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer: {
    width: 100,
    height: width * 1.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
