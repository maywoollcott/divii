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
  headerTextContainer: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.grayBlue,
    width: '60%',
    paddingBottom: 15,
  },
  header: {
    color: COLORS.grayBlue,
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  description: {
    color: COLORS.grayBlue,
    fontFamily: 'made-dillan',
    fontSize: 18,
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
  calendarContainer: {
    backgroundColor: COLORS.grayBlue,
    borderRadius: 15,
    paddingVertical: '5%',
    paddingHorizontal: '3%',
  },
});
