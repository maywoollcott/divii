import React, { useState, useContext, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  TextInputState,
  TextInputKeyPressEventData,
} from 'react-native';
import { styles } from './ForgotPassword.style';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../../globalStyles';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../Context';
import AppLoading from '../AppLoading/AppLoading';
import { BasicModal } from '../../components/Modal/BasicModal';
import { validateEmail } from '../../utils/emailValidation';
import { sendResetEmail, updateUser } from '../../apiService/data';
import { generateFourDigitNumber } from '../../utils/generateRandomNumber';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { updatedUserResponse } from '../../types';

const ForgotPassword: React.FC = () => {
  const navigation = useNavigation();
  const context = useContext(Context);

  const [step, setStep] = useState(0);
  const [resetEmail, setResetEmail] = useState('');
  const [resetCode, setResetCode] = useState('');
  const [enteredResetCode, setEnteredResetCode] = useState('');

  const sendResetCode = async (email: string) => {
    const emailValid = validateEmail(email);

    if (!emailValid) {
      context.setModalText('Please enter a valid email.');
      context.setModalOpen(true);
      return;
    }

    const code = generateFourDigitNumber().toString();

    setResetCode(code);

    const res = await sendResetEmail(email, code);
    console.log(res);

    if (res === 200) {
      setStep(1);
    } else if (res === 409) {
      console.log('no user');
      context.setModalText(
        'That email does not belong to a registered user. Please try again.'
      );
      context.setModalOpen(true);
      return;
    } else {
      context.setModalText(
        'There was an error sending your code. Please try again.'
      );
      context.setModalOpen(true);
      return;
    }
  };

  const checkResetCode = () => {
    if (resetCode == enteredResetCode) {
      //reset code matches
      setStep(2);
    } else {
      //reset code doesn't
      context.setModalText(
        "You've entered an incorrect code. Please try again."
      );
      context.setModalOpen(true);
      return;
    }
  };

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSaveHandler = async () => {
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
        resetEmail,
        updateObject
      );
      console.log(res);
      if (res.status === 200) {
        navigation.navigate('SignIn');
      } else {
        if (res.message) console.log(res.message);
      }
    } catch (error) {
      console.log('error');
    }
  };

  const digitRef1 = useRef<TextInput>(null);
  const digitRef2 = useRef<TextInput>(null);
  const digitRef3 = useRef<TextInput>(null);
  const digitRef4 = useRef<TextInput>(null);

  const changeFocusedInput = (
    text: TextInputKeyPressEventData,
    currentlyFocusedInput: any
  ) => {
    if (text.key === 'Backspace') {
      digitRef4.current?.clear();
      digitRef3.current?.clear();
      digitRef2.current?.clear();
      digitRef1.current?.clear();
      digitRef1.current?.focus();
      setEnteredResetCode('');
      return;
    }
    setEnteredResetCode(enteredResetCode + text.key.toString());
    currentlyFocusedInput.current?.focus();
  };

  if (!context.isLoading && step !== 2) {
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
          <View style={styles.headerContainer}>
            {step === 0 && (
              <Text style={styles.header}>
                Enter your email below to receive a code to reset your password.
              </Text>
            )}
            {step === 1 && (
              <Text style={styles.header}>
                Enter the four-digit code you received to your email. Remeber to
                check spam!
              </Text>
            )}
            {step === 2 && (
              <Text style={styles.header}>Enter a new password below.</Text>
            )}
          </View>
          <View style={styles.formContainer}>
            {step === 0 && (
              <>
                <TextInput
                  placeholder='Email'
                  placeholderTextColor={COLORS.parchment}
                  onChangeText={(text) => setResetEmail(text)}
                  style={styles.input}
                  autoCapitalize='none'
                  keyboardType='email-address'
                />
                <TouchableOpacity
                  style={styles.basicButton}
                  onPress={() => sendResetCode(resetEmail)}
                >
                  <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
              </>
            )}
            {step === 1 && (
              <>
                <View style={styles.inputCodeContainer}>
                  <TextInput
                    placeholder=''
                    placeholderTextColor={COLORS.parchment}
                    onKeyPress={({ nativeEvent }) =>
                      changeFocusedInput(nativeEvent, digitRef2)
                    }
                    style={styles.inputDigit}
                    autoCapitalize='none'
                    keyboardType='numeric'
                    autoFocus={true}
                    maxLength={1}
                    ref={digitRef1}
                  />
                  <TextInput
                    placeholder=''
                    placeholderTextColor={COLORS.parchment}
                    onKeyPress={({ nativeEvent }) =>
                      changeFocusedInput(nativeEvent, digitRef3)
                    }
                    style={styles.inputDigit}
                    autoCapitalize='none'
                    keyboardType='numeric'
                    maxLength={1}
                    ref={digitRef2}
                  />
                  <TextInput
                    placeholder=''
                    placeholderTextColor={COLORS.parchment}
                    onKeyPress={({ nativeEvent }) =>
                      changeFocusedInput(nativeEvent, digitRef4)
                    }
                    style={styles.inputDigit}
                    autoCapitalize='none'
                    keyboardType='numeric'
                    maxLength={1}
                    ref={digitRef3}
                  />
                  <TextInput
                    placeholder=''
                    placeholderTextColor={COLORS.parchment}
                    onKeyPress={({ nativeEvent }) =>
                      changeFocusedInput(nativeEvent, digitRef4)
                    }
                    style={styles.inputDigit}
                    autoCapitalize='none'
                    keyboardType='numeric'
                    maxLength={1}
                    ref={digitRef4}
                  />
                </View>
                <TouchableOpacity
                  style={styles.basicButton}
                  onPress={checkResetCode}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }

  if (!context.isLoading && step === 2) {
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
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              Enter a new password of at least six characters.
            </Text>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.passwordForm}>
              <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor={COLORS.parchment}
                onChangeText={(text) => setPassword(text)}
                autoCapitalize='none'
              />
              {password.length >= 6 && (
                <View style={styles.icon}>
                  <FontAwesomeIcon
                    color={COLORS.parchment}
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
                placeholderTextColor={COLORS.parchment}
                onChangeText={(text) => setConfirmPassword(text)}
                autoCapitalize='none'
              />
              {confirmPassword === password && password.length >= 6 && (
                <View style={styles.icon}>
                  <FontAwesomeIcon
                    color={COLORS.parchment}
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

export default ForgotPassword;
