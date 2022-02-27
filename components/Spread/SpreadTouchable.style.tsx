import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../../globalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  actionCardContainer: {
    width: '80%',
    alignItems: 'center',
  },
  touchable: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: COLORS.grayBlue,
    width: width * 0.7,
    height: width * 0.35,
    padding: 20,
    marginTop: '8%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spreadText: {
    color: COLORS.grayBlue,
    fontSize: width * 0.06,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
});
