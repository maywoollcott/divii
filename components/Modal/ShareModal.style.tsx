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
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.charcoal,
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
  basicButton: {},
  buttonText: {
    fontSize: 18,
    color: COLORS.parchment,
  },
  buttonContainer: {
    marginVertical: 35,
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  closeButtonContainer: {
    marginBottom: 20,
    marginTop: 35,
    width: '82%',
    alignItems: 'flex-end',
  },
});
