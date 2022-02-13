import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, Modal, Platform, Button, TouchableOpacity, TouchableWithoutFeedback, Linking } from 'react-native';
import { styles } from './ShareModal.style';
import { BlurView } from 'expo-blur';
import SharingCard from '../SharingCard/SharingCard';
import { Card, SpreadType } from '../../types';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../../globalStyles';
import { AntDesign } from '@expo/vector-icons';
import Share from 'react-native-share';
import { Context } from '../../Context';
import { captureRef, cap } from 'react-native-view-shot';

interface IShareModalProps {
  animationType: any;
  transparent: boolean;
  visible: any;
  onRequestClose: () => void;
  cards: Card[];
  spreadName: string;
  upright: boolean[];
}

export const ShareModal: React.FC<IShareModalProps> = ({
  animationType,
  transparent,
  visible,
  onRequestClose,
  cards,
  spreadName,
  upright,
}) => {
  const context = useContext(Context);
  const [instagramAccess, setInstagramAccess] = useState(false);

  const viewRef = useRef();

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Linking.canOpenURL('instagram://').then((val) => setInstagramAccess(val));
    } else {
      Share.isPackageInstalled('com.instagram.android').then(({ isInstalled }) => setInstagramAccess(isInstalled));
    }
  }, []);

  const instagramStoryHandler = async () => {
    // console.log('hi');
    // const shareResponse = await Share.shareSingle(shareOptions);
    // console.log(shareResponse);

    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });
      // await Share.open({ url: uri });

      const shareOptions = {
        social: Share.Social.INSTAGRAM_STORIES,
        backgroundBottomColor: COLORS.grayBlue,
        backgroundTopColor: COLORS.parchment,
        stickerImage: uri,
      };

      if (instagramAccess) {
        await Share.shareSingle(shareOptions);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const generalShareHandler = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 1,
      });
      await Share.open({ url: uri });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal animationType={animationType} transparent={transparent} visible={visible} onRequestClose={onRequestClose}>
      <BlurView intensity={100} tint={'dark'} style={styles.screenContainer}>
        <View style={styles.modalContainer}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity style={styles.basicButton} onPress={onRequestClose}>
              <AntDesign name='close' size={30} color={COLORS.parchment} />
            </TouchableOpacity>
          </View>
          <View ref={viewRef}>
            <SharingCard cards={cards} spread={spreadName} upright={upright} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.basicButton} onPress={instagramStoryHandler}>
              <FontAwesome name='instagram' size={60} color={COLORS.parchment} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name='share' size={53} color={COLORS.parchment} onPress={generalShareHandler} />
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};
