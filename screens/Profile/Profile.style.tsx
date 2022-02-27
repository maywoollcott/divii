import { Dimensions, Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../globalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  basicButton: {
    backgroundColor: COLORS.grayBlue,
    width: 170,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
  },
  buttonText: {
    fontSize: width * 0.05,
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
  },
  bodyText: {
    color: COLORS.grayBlue,
    fontSize: width * 0.05,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  bodyTextHighlight: {
    color: COLORS.orange,
    fontSize: width * 0.05,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  bodyContainer: {
    width: '80%',
  },
});
