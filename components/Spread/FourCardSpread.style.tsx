import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  spreadContainer: {
    height: width * 1.2,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: width * 0.35,
    height: width * 0.63,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
