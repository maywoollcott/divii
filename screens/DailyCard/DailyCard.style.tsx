import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../../globalStyles';

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
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  keyTerms: {
    color: COLORS.orange,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    lineHeight: 35,
  },
  reversed: {
    color: COLORS.grayBlue,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    lineHeight: 35,
  },
  keyTermsContainer: {
    marginVertical: '8%',
    width: 250,
    borderTopColor: COLORS.grayBlue,
    borderBottomColor: COLORS.grayBlue,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 10,
  },
  description: {
    color: COLORS.grayBlue,
    fontSize: 18,
    lineHeight: 22,
    marginLeft: '3%',
    marginBottom: '20%',
  },
  secondaryHeader: {
    color: COLORS.orange,
    fontSize: 18,
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
  share: {
    color: COLORS.grayBlue,
    marginLeft: 5,
  },
  shareAndHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});
