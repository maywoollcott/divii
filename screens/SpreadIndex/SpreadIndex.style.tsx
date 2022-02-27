import { StyleSheet, Dimensions, Platform } from 'react-native';
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
  },
  touchableContainer: {
    alignSelf: 'flex-start',
    marginTop: '5%',
  },
  backArrowContainer: {
    display: 'flex',
    position: 'absolute',
    top: '3%',
    left: '3%',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
    marginTop: '15%',
  },
  whiteStar: {
    marginHorizontal: width * 0.02,
    width: width * 0.2,
    height: width * 0.18,
  },
  actionCardContainer: {
    width: '80%',
    alignItems: 'center',
  },
  header: {
    color: COLORS.grayBlue,
    fontSize: width * 0.082,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
});
