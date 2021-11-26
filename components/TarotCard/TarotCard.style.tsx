import React from 'react';
import { Platform, StyleSheet } from 'react-native';

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
});
