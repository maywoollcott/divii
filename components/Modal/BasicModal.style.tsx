import { StyleSheet } from 'react-native';
import { COLORS } from '../../globalStyles';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.parchment,
    borderRadius: 20,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
    width: '80%',
  },
  modalText: {
    color: COLORS.grayBlue,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  basicButton: {
    backgroundColor: COLORS.grayBlue,
    width: 170,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.parchment,
  },
});
