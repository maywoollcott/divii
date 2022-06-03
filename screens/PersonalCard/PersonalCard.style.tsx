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
  },
  touchableContainer: {
    alignSelf: 'flex-start',
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'row',
  },
  backArrowContainer: {
    display: 'flex',
    position: 'absolute',
    top: '3%',
    left: '3%',
  },
  shareContainer: {
    display: 'flex',
    position: 'absolute',
    top: '5%',
    left: '90%',
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
    fontSize: width * 0.06,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  keyTerms: {
    color: COLORS.orange,
    fontSize: width * 0.054,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    lineHeight: 35,
  },
  reversed: {
    color: COLORS.grayBlue,
    fontSize: width * 0.054,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    lineHeight: 35,
  },
  keyTermsContainer: {
    marginVertical: '8%',
    width: width * 0.7,
    borderTopColor: COLORS.grayBlue,
    borderBottomColor: COLORS.grayBlue,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 10,
  },
  description: {
    color: COLORS.grayBlue,
    fontSize: width * 0.047,
    lineHeight: width * 0.056,
    marginLeft: '3%',
    marginBottom: '20%',
  },
  secondaryHeader: {
    color: COLORS.orange,
    fontSize: width * 0.047,
    textAlign: 'center',
  },
  card: {
    borderRadius: 15,
  },
  descriptionContainer: {
    marginTop: '10%',
    alignItems: 'center',
    width: '85%',
  },
  shareAndHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  basicButton: {},
  buttonText: {
    fontSize: 18,
    color: COLORS.parchment,
  },
  buttonContainer: {
    marginVertical: width * 0.09,
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});
