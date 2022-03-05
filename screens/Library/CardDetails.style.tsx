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
    marginBottom: '5%',
    marginTop: '10%',
  },
  actionCardContainer: {
    width: '80%',
    alignItems: 'center',
  },
  header: {
    color: COLORS.grayBlue,
    fontSize: width * 0.07,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  keyTerms: {
    color: COLORS.orange,
    fontSize: width * 0.053,
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
    width: width * 0.6,
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
    lineHeight: width * 0.06,
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
    marginTop: '7%',
    alignItems: 'center',
    width: '85%',
  },
  tabs: {
    height: 50,
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: COLORS.grayBlue,
    borderWidth: 1.25,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: '7%',
  },
  tabText: {
    color: COLORS.grayBlue,
    fontSize: width * 0.047,
  },
  tabTextSelected: {
    color: COLORS.orange,
    fontSize: width * 0.047,
  },
});
