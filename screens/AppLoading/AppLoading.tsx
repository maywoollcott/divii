import React from 'react';
import { View, Animated, Easing } from 'react-native';
import { styles } from './AppLoading.style';
import { images } from '../../assets/images/imagesIndex';

const AppLoading: React.FC = () => {
  const spinValue = new Animated.Value(0);

  // First set up animation
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    })
  ).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View style={styles.screenContainer}>
      <Animated.Image
        style={{ transform: [{ rotate: spin }], width: 150, height: 150 }}
        source={images.spinner}
      />
    </View>
  );
};

export default AppLoading;
