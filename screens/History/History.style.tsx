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
    display: 'flex',
    marginBottom: '15%',
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
    flexDirection: 'column',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
    marginTop: '15%',
  },
  headerTextContainer: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.grayBlue,
    width: '60%',
    paddingBottom: 15,
  },
  header: {
    color: COLORS.grayBlue,
    fontSize: width * 0.09,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  description: {
    color: COLORS.grayBlue,
    fontFamily: 'made-dillan',
    fontSize: width * 0.05,
    lineHeight: 22,
    marginLeft: '3%',
    marginBottom: '5%',
    textAlign: 'center',
  },
  descriptionContainer: {
    marginTop: '7%',
    alignItems: 'center',
    width: '100%',
  },
});
