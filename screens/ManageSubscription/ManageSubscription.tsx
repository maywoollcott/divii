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
import Purchases from 'react-native-purchases';
import moment from 'moment';

const ManageSubscription = () => {
  const context = React.useContext(Context);
  const navigate = useNavigation();

  const [renewsOn, setRenewsOn] = useState('');

  const goBack = () => {
    navigate.goBack();
  };
  const { checkIfSubscribed, getDetailedSubscriptionInfo } = useIsSubscribed();

  const getSubscriptionInfo = async () => {
    const res = await getDetailedSubscriptionInfo();
    let renewalDate = moment(new Date(res.renewsOn)).format('MMMM D, YYYY');
    setRenewsOn(renewalDate);
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
            <Text style={styles.headerText}>Manage Subscription</Text>
          </View>
          <View style={styles.bodyContainer}>
            <Text>{renewsOn}</Text>
          </View>
          <TouchableOpacity style={styles.basicButton} onPress={getSubscriptionInfo}>
            <Text style={styles.buttonText}>Subscription Info</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }

  return <AppLoading />;
};

export default ManageSubscription;
