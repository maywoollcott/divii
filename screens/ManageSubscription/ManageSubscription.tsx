import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { styles } from './ManageSubscription.style';
import { Context } from '../../Context';
import AppLoading from '../AppLoading/AppLoading';
import { COLORS } from '../../globalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { BasicModal } from '../../components/Modal/BasicModal';
import useIsSubscribed from '../../hooks/useIsSubscribed';

const ManageSubscription = () => {
  const context = React.useContext(Context);
  const navigate = useNavigation();

  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const goBack = () => {
    navigate.goBack();
  };
  const { checkIfSubscribed } = useIsSubscribed();

  const onManageHandler = () => {};

  const fetchSubscriptionInfo = async () => {
    const results = await checkIfSubscribed();
    console.log(results);
  };

  useEffect(() => {
    fetchSubscriptionInfo();
  }, []);

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
            <Text style={styles.headerText}>Manage Subscription</Text>
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
                  <FontAwesomeIcon color={COLORS.grayBlue} size={25} icon={faCheckCircle} />
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
                  <FontAwesomeIcon color={COLORS.grayBlue} size={25} icon={faCheckCircle} />
                </View>
              )}
            </View>
          </View>
          <TouchableOpacity style={styles.basicButton} onPress={onManageHandler}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }

  return <AppLoading />;
};

export default ManageSubscription;
