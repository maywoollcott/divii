import { StyleSheet } from 'react-native';
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
    marginBottom: '10%',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    color: COLORS.ghostWhite,
    borderColor: COLORS.lavenderBlue,
    borderWidth: 3,
    borderRadius: 10,
    height: 50,
    fontSize: 18,
    paddingLeft: 15,
    marginBottom: '5%',
    width: '75%',
  },
  basicButton: {
    backgroundColor: COLORS.lavenderBlue,
    width: 170,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.gunmetal,
  },
  centeredTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rerouteText: {
    fontSize: 18,
    color: COLORS.ghostWhite,
  },
  passwordForm: {
    flexDirection: 'row',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    marginLeft: '66%',
    marginTop: '3.3%',
  },
});
