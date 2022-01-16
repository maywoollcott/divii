import { Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../globalStyles';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.parchment,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basicButton: {
    backgroundColor: COLORS.grayBlue,
    width: 170,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.parchment,
  },
  headerText: {
    color: COLORS.grayBlue,
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    marginBottom: '15%',
    marginTop: Platform.OS === 'ios' ? 0 : '6%',
  },
  bodyTextSingleContainer: {
    marginBottom: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  bodyText: {
    color: COLORS.grayBlue,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  bodyTextHighlight: {
    color: COLORS.orange,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'made-dillan',
  },
  bodyContainer: {
    width: '80%',
  },
});
