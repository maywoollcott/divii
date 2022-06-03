import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

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
