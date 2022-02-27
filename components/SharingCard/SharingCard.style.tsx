import React from 'react';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../globalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  card: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
    margin: 0,
    padding: 0,
    flex: 1.5,
    alignItems: 'center',
  },

  reversedCard: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
    margin: 0,
    padding: 0,
    flex: 1.5,
    alignItems: 'center',
    transform: [{ rotateY: '180deg' }, { rotateX: '180deg' }],
  },
  headerText: {
    color: COLORS.parchment,
    fontSize: width * 0.06,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    width: '70%',
    marginVertical: height * 0.025,
  },
  sharingCardContainer: {
    backgroundColor: COLORS.grayBlue,
    width: width * 0.77,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  keyTermsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  keyTermsText: {
    fontFamily: 'made-dillan',
    color: COLORS.parchment,
    marginVertical: 15,
    textAlign: 'center',
    fontSize: width * 0.042,
  },
  centralContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  diviiLabelContainer: {
    backgroundColor: COLORS.parchment,
    height: height * 0.08,
    width: width * 0.77,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  diviiText: {
    fontSize: width * 0.1,
    fontFamily: 'made-dillan',
    color: COLORS.grayBlue,
    marginLeft: 20,
  },
  cardText: {
    color: COLORS.parchment,
    fontSize: width * 0.06,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    width: '80%',
    marginTop: height * 0.025,
  },
  directionalText: {
    fontFamily: 'made-dillan',
    color: COLORS.parchment,
    marginBottom: height * 0.025,
  },
});
