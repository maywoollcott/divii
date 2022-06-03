import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../globalStyles';

const { width } = Dimensions.get('window');

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
    position: 'relative',
  },
  text: {
    color: COLORS.grayBlue,
    fontFamily: 'made-dillan',
    fontSize: width * 0.1,
    width: '90%',
    textAlign: 'center',
  },
  bodyText: {
    color: COLORS.grayBlue,
    fontSize: width * 0.045,
  },
  basicButton: {
    backgroundColor: COLORS.grayBlue,
    width: '60%',
    height: width * 0.23,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: width * 0.06,
    color: COLORS.parchment,
    width: '80%',
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '8%',
    width: '90%',
  },
  bodyContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '75%',
    paddingRight: width * 0.1,
  },
  bulletContainer: {
    flexDirection: 'row',
    marginVertical: '3.5%',
  },
  starBullet: {
    marginRight: '4%',
    marginTop: '.7%',
  },
  priceText: {
    fontWeight: '700',
    color: COLORS.grayBlue,
    textAlign: 'center',
    fontSize: width * 0.045,
  },
});
