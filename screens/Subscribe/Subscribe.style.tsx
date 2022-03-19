import { Dimensions, Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../globalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  bounceContainer: {
    backgroundColor: COLORS.charcoal,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.charcoal,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    color: COLORS.grayBlue,
    fontFamily: 'made-dillan',
    fontSize: width * 0.1,
    width: '70%',
    textAlign: 'center',
  },
  basicButton: {
    backgroundColor: COLORS.grayBlue,
    width: '60%',
    height: width * 0.3,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
  },
  buttonText: {
    fontSize: width * 0.06,
    color: COLORS.charcoal,
    width: '80%',
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
});
