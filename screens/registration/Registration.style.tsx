import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../globalStyles';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.grayBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    width: '80%',
    marginTop: '10%',
  },
  header: {
    color: COLORS.parchment,
    fontSize: width * 0.1,
    textAlign: 'center',
    fontFamily: 'made-dillan',
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
    height: width * 0.14,
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
