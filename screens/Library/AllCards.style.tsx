import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../../globalStyles';

const { width } = Dimensions.get('window');

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
    display: 'flex',
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
  cardsContainer: {
    display: 'flex',
    width: Dimensions.get('window').width,
  },
  header: {
    color: COLORS.grayBlue,
    fontSize: width * 0.09,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  input: {
    color: COLORS.grayBlue,
    borderColor: COLORS.grayBlue,
    borderWidth: 2,
    borderRadius: 30,
    height: 40,
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 30,
    width: 260,
  },
  inputContainer: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    bottom: 7,
    left: 10,
  },
});
