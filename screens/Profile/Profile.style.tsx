import { StyleSheet } from 'react-native';
import { COLORS } from '../../globalStyles';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.parchment,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basicButton: {
    backgroundColor: COLORS.grayBlue,
    width: 170,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '15%',
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.parchment,
  },
});
