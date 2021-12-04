import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../../globalStyles';

export const styles = StyleSheet.create({
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
  },
  leftCurtain: {},
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
    marginTop: 120,
  },
  actionCardContainer: {
    width: '80%',
    alignItems: 'center',
    marginTop: 30,
  },
  header: {
    color: COLORS.grayBlue,
    fontSize: 36,
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
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    width: '80%',
  },
  descriptionText: {
    color: COLORS.grayBlue,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    width: '80%',
  },
  touchable: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: COLORS.grayBlue,
    width: 240,
    height: 120,
    padding: 20,
    marginTop: '8%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
