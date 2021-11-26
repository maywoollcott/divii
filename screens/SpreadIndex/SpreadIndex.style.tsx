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
  actionCardContainer: {
    width: '80%',
    alignItems: 'center',
  },
  header: {
    color: COLORS.grayBlue,
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  touchable: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: COLORS.grayBlue,
    width: 280,
    height: 130,
    padding: 20,
    marginTop: '8%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spreadText: {
    color: COLORS.grayBlue,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
});
