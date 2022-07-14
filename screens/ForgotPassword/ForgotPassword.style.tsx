import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../globalStyles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.grayBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: COLORS.parchment,
    fontSize: width * 0.06,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    marginBottom: '15%',
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
    marginBottom: 15,
    width: '80%',
  },
  inputDigit: {
    color: COLORS.parchment,
    borderColor: COLORS.parchment,
    borderWidth: 3,
    borderRadius: 10,
    height: 50,
    fontSize: 20,
    paddingLeft: 15,
    marginBottom: 15,
    width: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  basicButton: {
    backgroundColor: COLORS.parchment,
    width: 170,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '2%',
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.orange,
  },
  centeredTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rerouteText: {
    fontSize: 18,
    color: COLORS.parchment,
    textAlign: 'center',
  },
  rerouteTextPassword: {
    fontSize: 18,
    color: COLORS.parchment,
    textAlign: 'center',
    marginBottom: '15%',
  },
  starImage: {
    position: 'absolute',
    zIndex: 0,
  },

  touchableContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: '3%',
    left: '3%',
  },
  bounceContainer: {
    backgroundColor: COLORS.parchment,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  bodyTextSingleContainer: {
    marginBottom: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderColor: COLORS.grayBlue,
    borderWidth: 3,
    borderRadius: 10,
  },
  touchableSaveContainer: {
    marginLeft: 'auto',
  },
  bodyContainer: {
    width: '85%',
  },
  passwordForm: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 3,
    marginTop: '3.3%',
  },
  inputCodeContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});
