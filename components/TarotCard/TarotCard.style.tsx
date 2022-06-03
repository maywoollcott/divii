import React from 'react';
import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

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
    alignItems: 'center',
  },
  cardContainer: {
    borderRadius: 10,
    margin: 0,
    padding: 0,
  },
  reverseCardContainer: {
    borderRadius: 10,
    transform: [{ rotateY: '180deg' }, { rotateX: '180deg' }],
    margin: 0,
    padding: 0,
  },
  personalName: {
    position: 'absolute',
    bottom: '3.2%',
    fontFamily: 'made-dillan',
    color: '#3d4447',
    fontSize: width * 0.04,
  },
  personalNumber: {
    position: 'absolute',
    top: '1.4%',
    fontFamily: 'made-dillan',
    color: '#3d4447',
    fontSize: width * 0.04,
  },
});
