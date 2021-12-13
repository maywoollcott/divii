import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Profile.style';
import { Context } from '../../Context';

const Profile = () => {
  const context = React.useContext(Context);

  return (
    <View style={styles.screenContainer}>
      <Text>Profile Screen</Text>
      <Text>{context.currentUser._id}</Text>
    </View>
  );
};

export default Profile;
