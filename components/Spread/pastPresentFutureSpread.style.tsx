import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../../globalStyles';

export const styles = StyleSheet.create({
  spreadContainer: {
    height: 230,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer: {
    width: 110,
    height: 181,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
