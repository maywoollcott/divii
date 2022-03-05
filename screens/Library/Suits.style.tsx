import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../../globalStyles';

const { width, height } = Dimensions.get('window');

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
    marginBottom: '20%',
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
    marginBottom: '2%',
    marginTop: '15%',
  },
  headerTextContainer: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.grayBlue,
    width: '90%',
    paddingBottom: 15,
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingRight: 16,
  },
  header: {
    color: COLORS.grayBlue,
    fontSize: width * 0.09,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  expandable: {
    color: COLORS.grayBlue,
    borderColor: COLORS.grayBlue,
    borderWidth: 1.5,
    borderRadius: 15,
    fontSize: width * 0.05,
    paddingLeft: 15,
    marginTop: 30,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  expandableText: {
    color: COLORS.grayBlue,
    fontSize: width * 0.062,
    fontFamily: 'made-dillan',
    marginVertical: 15,
  },
  rightArrowIcon: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  inputContainer: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    bottom: 7,
    left: 10,
  },
  description: {
    color: COLORS.grayBlue,
    fontSize: width * 0.047,
    lineHeight: 22,
    marginLeft: '3%',
    marginBottom: '5%',
  },
  headerDescription: {
    color: COLORS.grayBlue,
    fontSize: width * 0.047,
    lineHeight: 22,
    marginLeft: '3%',
  },
  descriptionContainer: {
    marginTop: '7%',
    alignItems: 'center',
    width: '100%',
  },
  dividerLine: {
    backgroundColor: COLORS.grayBlue,
    height: 1.2,
    width: 160,
  },
});
