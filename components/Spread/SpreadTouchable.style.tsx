import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../../globalStyles';

export const styles = StyleSheet.create({
  actionCardContainer: {
    width: '80%',
    alignItems: 'center',
  },
  touchable: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: COLORS.grayBlue,
    width: 280,
    height: 130,
    padding: 20,
    marginTop: '8%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spreadText: {
    color: COLORS.grayBlue,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
});
