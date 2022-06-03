import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { styles } from './ManageSubscription.style';
import { Context } from '../../Context';
import AppLoading from '../AppLoading/AppLoading';
import { COLORS } from '../../globalStyles';
import { BasicModal } from '../../components/Modal/BasicModal';
import useIsSubscribed from '../../hooks/useIsSubscribed';
import moment from 'moment';

const ManageSubscription = () => {
  const context = React.useContext(Context);
  const navigate = useNavigation();

  const [renewsOn, setRenewsOn] = useState('');

  const goBack = () => {
    navigate.goBack();
  };
  const { getDetailedSubscriptionInfo } = useIsSubscribed();

  useEffect(() => {
    getSubscriptionInfo();
  }, []);

  const getSubscriptionInfo = async () => {
    const res = await getDetailedSubscriptionInfo();
    if (res.renewsOn) {
      let renewalDate = moment(new Date(res.renewsOn)).format('MMMM D, YYYY');
      setRenewsOn(renewalDate);
    }
  };

  const redirectToSubscriptions = () => {
    Linking.openURL('https://apps.apple.com/account/subscriptions');
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
            <Text style={styles.subscriptionText}>
              Your current subscription renews on {renewsOn} for another month.
            </Text>
            <Text style={styles.subscriptionText}>
              Click below to manage your subscription in IOS settings.
            </Text>
            <TouchableOpacity
              style={styles.basicButton}
              onPress={redirectToSubscriptions}
            >
              <Text style={styles.buttonText}>Subscription Settings</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }

  return <AppLoading />;
};

export default ManageSubscription;
