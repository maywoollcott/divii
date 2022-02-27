import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../../globalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  spreadContainer: {
    height: width * 0.58,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer: {
    width: width * 0.29,
    height: width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
