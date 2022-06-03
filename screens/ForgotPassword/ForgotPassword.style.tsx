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
    fontSize: width * 0.13,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    lineHeight: 58,
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
});
