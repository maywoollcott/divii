import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../globalStyles';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.parchment,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 18,
    marginTop: '5%',
    marginBottom: '10%',
  },
  actionCardContainer: {
    width: '80%',
    alignItems: 'center',
  },
  header: {
    color: COLORS.grayBlue,
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  touchable: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: COLORS.grayBlue,
    width: 280,
    padding: 20,
    marginTop: '8%',
  },
});
