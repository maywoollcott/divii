import { StyleSheet, Dimensions } from 'react-native';
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
    backgroundColor: COLORS.parchment,
    alignItems: 'center',
    flexGrow: 1,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.parchment,
    width: '100%',
    alignItems: 'center',
    marginBottom: '10%',
    position: 'relative',
  },
  leftCurtainContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: -2,
    left: -3,
    width: '100%',
  },
  rightCurtain: {
    position: 'absolute',
    right: -6,
    top: 0,
    width: width * 0.3,
    height: width * 0.946,
  },
  leftCurtain: {
    width: width * 0.3,
    height: width * 0.946,
  },
  backArrowContainer: {
    display: 'flex',
    position: 'absolute',
    top: '3%',
    left: '3%',
  },
  headerContainer: {
    display: 'flex',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
    marginTop: width * 0.25,
  },
  actionCardContainer: {
    width: '80%',
    alignItems: 'center',
    marginTop: width * 0.02,
  },
  header: {
    color: COLORS.grayBlue,
    fontSize: width * 0.09, //36
    textAlign: 'center',
    fontFamily: 'made-dillan',
    marginBottom: 15,
  },
  headerTextContainer: {
    borderBottomColor: COLORS.grayBlue,
    borderBottomWidth: 1,
    width: '65%',
    marginVertical: 15,
  },
  touchableText: {
    color: COLORS.grayBlue,
    fontSize: width * 0.07,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    width: '80%',
  },
  descriptionText: {
    color: COLORS.grayBlue,
    fontSize: width * 0.05,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    width: '80%',
  },
  touchable: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: COLORS.grayBlue,
    width: width * 0.65,
    height: width * 0.3,
    padding: width * 0.02,
    marginTop: '8%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
