import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { updateUser } from '../../apiService/data';
import { styles } from './ResetPassword.style';
import { Context } from '../../Context';
import { updatedUserResponse } from '../../types';
import AppLoading from '../AppLoading/AppLoading';
import { COLORS } from '../../globalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { BasicModal } from '../../components/Modal/BasicModal';
import { useAnalytics } from '@segment/analytics-react-native';
import {
  eventTypes,
  changePasswordEvents,
} from '../../analytics/trackedEvents';

const ResetPassword = () => {
  const context = React.useContext(Context);
  const { track, identify, screen } = useAnalytics();
  const navigate = useNavigation();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    identify(context.currentUser?._id, {
      name: context.currentUser?.name,
      email: context.currentUser?.email,
      dateJoined: context.currentUser?.dateJoined,
    });
    screen(changePasswordEvents.screenName);
  }, []);

  const goBack = () => {
    track(changePasswordEvents.backButton, {
      type: eventTypes.buttonPress,
      screen: changePasswordEvents.screenName,
    });
    navigate.goBack();
  };

  const onSaveHandler = async () => {
    track(changePasswordEvents.updatePassword, {
      type: eventTypes.buttonPress,
      screen: changePasswordEvents.screenName,
    });

    if (password.length < 6) {
      context.setModalText(
        'Please choose a password of at least 6 characters.'
      );
      context.setModalOpen(true);
      return;
    }

    if (password !== confirmPassword) {
      context.setModalText('Please make sure your passwords match.');
      context.setModalOpen(true);
      return;
    }

    const updateObject = {
      password: password,
    };

    Keyboard.dismiss();

    try {
      const res: updatedUserResponse = await updateUser(
        context.currentUser.email,
        updateObject
      );
      console.log(res);
      if (res.status === 200) {
        context.setCurrentUser(res.updatedUser);
      } else {
        if (res.message) console.log(res.message);
      }
    } catch (error) {
      console.log('error');
    }
  };

  if (!context.isLoading) {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.screenContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={-10}
        >
          <BasicModal
            animationType='none'
            transparent={true}
            visible={context.modalOpen}
            onRequestClose={() => {
              context.setModalOpen(!context.modalOpen);
            }}
            modalText={context.modalText}
          />
          <View style={styles.touchableContainer}>
            <TouchableOpacity onPress={goBack}>
              <Feather name='arrow-left' size={28} color={COLORS.grayBlue} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Change Password</Text>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.passwordForm}>
              <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor={COLORS.grayBlue}
                onChangeText={(text) => setPassword(text)}
                autoCapitalize='none'
              />
              {password.length >= 6 && (
                <View style={styles.icon}>
                  <FontAwesomeIcon
                    color={COLORS.grayBlue}
                    size={25}
                    icon={faCheckCircle}
                  />
                </View>
              )}
            </View>
            <View style={styles.passwordForm}>
              <TextInput
                style={styles.input}
                placeholder='Confirm Password'
                secureTextEntry={true}
                placeholderTextColor={COLORS.grayBlue}
                onChangeText={(text) => setConfirmPassword(text)}
                autoCapitalize='none'
              />
              {confirmPassword === password && password.length >= 6 && (
                <View style={styles.icon}>
                  <FontAwesomeIcon
                    color={COLORS.grayBlue}
                    size={25}
                    icon={faCheckCircle}
                  />
                </View>
              )}
            </View>
          </View>
          <TouchableOpacity style={styles.basicButton} onPress={onSaveHandler}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }

  return <AppLoading />;
};

export default ResetPassword;
