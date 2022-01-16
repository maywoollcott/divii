import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../../globalStyles';

export const styles = StyleSheet.create({
  spreadContainer: {
    height: 400,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: 140,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
