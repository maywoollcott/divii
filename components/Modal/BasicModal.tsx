import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { styles } from './BasicModal.style';
import { BlurView } from 'expo-blur';

interface IBasicModalProps {
  animationType: any;
  transparent: boolean;
  visible: any;
  onRequestClose: () => void;
  modalText: string;
}

export const BasicModal: React.FC<IBasicModalProps> = ({
  animationType,
  transparent,
  visible,
  onRequestClose,
  modalText,
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <BlurView intensity={100} tint={'dark'} style={styles.screenContainer}>
        <View style={styles.modalContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.modalText}>{modalText}</Text>
          </View>
          <TouchableOpacity style={styles.basicButton} onPress={onRequestClose}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </Modal>
  );
};
