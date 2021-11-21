import { StyleSheet } from 'react-native';
import { COLORS } from '../../globalStyles';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.grayBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    width: '80%',
  },
  header: {
    color: COLORS.parchment,
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
    color: COLORS.parchment,
    borderColor: COLORS.parchment,
    borderWidth: 3,
    borderRadius: 10,
    height: 50,
    fontSize: 18,
    paddingLeft: 15,
    marginBottom: '5%',
    width: '75%',
  },
  basicButton: {
    backgroundColor: COLORS.parchment,
    width: 170,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '7%',
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.orange,
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
  rerouteText: {
    fontSize: 18,
    color: COLORS.parchment,
    textAlign: 'center',
  },
});
