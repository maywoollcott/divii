import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS } from '../../globalStyles';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.spaceCadetDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    width: '80%',
  },
  header: {
    color: COLORS.lavenderBlue,
    fontSize: 55,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    lineHeight: 58,
    marginBottom: '1%',
  },
  subtext: {
    color: COLORS.ghostWhite,
    fontSize: 22,
    fontFamily: 'Roboto',
    marginBottom: '15%',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    color: COLORS.ghostWhite,
    borderColor: COLORS.lavenderBlue,
    borderWidth: 3,
    borderRadius: 10,
    height: 50,
    fontSize: 22,
    paddingLeft: 15,
    marginBottom: 15,
  },
});
