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
  bodyContainer: {
    width: '85%',
    alignItems: 'center',
  },
  headerContainer: {
    marginTop: height * 0.07,
    width: '70%',
  },
  subscriptionText: {
    color: COLORS.grayBlue,
    fontSize: width * 0.04,
    width: '80%',
    textAlign: 'center',
    marginBottom: '15%',
  },
});
