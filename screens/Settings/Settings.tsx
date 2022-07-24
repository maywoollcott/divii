import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { updateUser } from '../../apiService/data';
import { styles } from './Settings.style';
import { Context } from '../../Context';
import { updatedUserResponse } from '../../types';
import AppLoading from '../AppLoading/AppLoading';
import { COLORS } from '../../globalStyles';
import { TextInputMask } from 'react-native-masked-text';
import { validateEmail } from '../../utils/emailValidation';
import { determineAstrologicalSign } from '../registration/utils';
import { useAnalytics } from '@segment/analytics-react-native';
import { eventTypes, settingsEvents } from '../../analytics/trackedEvents';
import { BasicModal } from '../../components/Modal/BasicModal';

const Settings = () => {
  const context = React.useContext(Context);
  const navigate = useNavigation();
  const { track, identify, screen } = useAnalytics();

  const [birthdate, setBirthdate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const goBack = () => {
    navigate.goBack();
  };

  useEffect(() => {
    identify(context.currentUser?._id, {
      name: context.currentUser?.name,
      email: context.currentUser?.email,
      dateJoined: context.currentUser?.dateJoined,
    });
    screen(settingsEvents.screenName);
  }, []);

  const onChangePasswordHandler = () => {
    track(settingsEvents.changePassword, {
      type: eventTypes.buttonPress,
      screen: settingsEvents.screenName,
    });
    navigate.navigate('ResetPassword');
  };

  // const onManageSubscriptionHandler = () => {
  //   navigate.navigate('ManageSubscription');
  // };

  const onSaveHandler = async (field: string, value: string) => {
    track(`${settingsEvents.saveEditedInfo} ${field}`, {
      type: eventTypes.buttonPress,
      screen: settingsEvents.screenName,
    });
    if (field === 'email') {
      if (validateEmail(value) === false) {
        context.setModalText('Please enter a valid email address.');
        context.setModalOpen(true);
        return;
      }
    }

    const updateObject: any = {};
    updateObject[field] = value;

    Keyboard.dismiss();

    if ((field = 'birthdate')) {
      updateObject.sign = determineAstrologicalSign(birthdate);
    }

    if (context.currentUser[field] !== value && value.length > 1) {
      try {
        const res: updatedUserResponse = await updateUser(
          context.currentUser.email,
          updateObject
        );
        console.log(res);
        if (res.status === 200) {
          context.setCurrentUser(res.updatedUser);
        } else if (res.status === 409) {
          console.log('pick an unused email');
        } else {
          if (res.message) console.log(res.message);
        }
      } catch (error) {
        console.log('error');
      }
    }
  };

  if (!context.isLoading) {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={-64}
          style={styles.screenContainer}
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
            <Text style={styles.headerText}>Settings</Text>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.bodyTextSingleContainer}>
              <TextInput
                style={styles.bodyText}
                onChangeText={(text) => setName(text)}
                placeholder={context.currentUser.name}
                placeholderTextColor={COLORS.grayBlue}
              />
              <TouchableOpacity
                style={styles.touchableSaveContainer}
                onPress={() => onSaveHandler('name', name)}
              >
                <Text style={styles.bodyTextHighlight}>Save</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bodyTextSingleContainer}>
              <TextInput
                style={styles.bodyText}
                onChangeText={(text) => setEmail(text)}
                placeholder={context.currentUser.email}
                placeholderTextColor={COLORS.grayBlue}
                autoCapitalize='none'
              />
              <TouchableOpacity
                style={styles.touchableSaveContainer}
                onPress={() => onSaveHandler('email', email.toLowerCase())}
              >
                <Text style={styles.bodyTextHighlight}>Save</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bodyTextSingleContainer}>
              <TextInputMask
                type={'datetime'}
                options={{
                  format: 'MM/DD',
                }}
                style={styles.bodyText}
                keyboardType='numeric'
                placeholder={`${context.currentUser.birthdate.slice(
                  5,
                  7
                )}/${context.currentUser.birthdate.slice(8, 10)}`}
                value={birthdate}
                placeholderTextColor={COLORS.grayBlue}
                onChangeText={(text) => {
                  setBirthdate(text);
                }}
              />
              <TouchableOpacity style={styles.touchableSaveContainer}>
                <Text
                  style={styles.bodyTextHighlight}
                  onPress={() => onSaveHandler('birthdate', birthdate)}
                >
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.basicButton}
            onPress={onChangePasswordHandler}
          >
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.basicButton}
            onPress={onManageSubscriptionHandler}
          >
            <Text style={styles.buttonText}>Manage Subscription</Text>
          </TouchableOpacity> */}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }

  return <AppLoading />;
};

export default Settings;
