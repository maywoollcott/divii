import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../globalStyles';

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
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    width: '70%',
    marginVertical: 40,
  },
  sharingCardContainer: {
    backgroundColor: COLORS.grayBlue,
    width: 300,
    height: 440,
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
    fontSize: 15,
  },
  centralContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  diviiLabelContainer: {
    backgroundColor: COLORS.parchment,
    height: 70,
    width: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  diviiText: {
    fontSize: 40,
    fontFamily: 'made-dillan',
    color: COLORS.grayBlue,
    marginLeft: 20,
  },
  cardText: {
    color: COLORS.parchment,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'made-dillan',
    width: '70%',
    marginTop: 40,
  },
  directionalText: {
    fontFamily: 'made-dillan',
    color: COLORS.parchment,
    marginBottom: 40,
  },
});
