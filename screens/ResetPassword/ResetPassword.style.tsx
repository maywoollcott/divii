import { Dimensions, Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../globalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
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
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.parchment,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  basicButton: {
    backgroundColor: COLORS.grayBlue,
    width: width * 0.5,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: width * 0.04,
  },
  buttonText: {
    fontSize: width * 0.04,
    color: COLORS.parchment,
  },
  headerText: {
    color: COLORS.grayBlue,
    fontSize: width * 0.09,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    marginBottom: '15%',
    marginTop: Platform.OS === 'ios' ? 0 : '6%',
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
  headerContainer: {
    marginTop: height * 0.07,
    width: '70%',
  },
  passwordForm: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    color: COLORS.grayBlue,
    borderColor: COLORS.grayBlue,
    borderWidth: 3,
    borderRadius: 10,
    fontSize: width * 0.045,
    padding: width * 0.02,
    paddingLeft: 15,
    marginBottom: '5%',
    width: '75%',
  },
  icon: {
    position: 'absolute',
    right: 3,
    marginTop: '3.3%',
  },
});
