import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../globalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  moons: {
    width: width * 0.6,
    height: width * 0.3,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: COLORS.parchment,
    alignItems: 'center',
    flexGrow: 1,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  morningGreeting: {
    fontFamily: 'made-dillan',
    color: COLORS.grayBlue,
    textAlign: 'center',
    fontSize: width * 0.05, //18
    marginTop: '5%',
    marginBottom: '5%',
  },
  actionCardContainer: {
    width: '80%',
    alignItems: 'center',
  },
  header: {
    color: COLORS.grayBlue,
    fontSize: width * 0.08, //30
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  touchable: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: COLORS.grayBlue,
    width: width * 0.7,
    padding: height * 0.03,
    marginTop: '8%',
  },
});
