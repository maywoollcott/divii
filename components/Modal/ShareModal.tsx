import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Modal,
  Platform,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Linking,
  Dimensions,
} from 'react-native';
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
import { captureRef } from 'react-native-view-shot';

const { width, height } = Dimensions.get('window');
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
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 1,
      });

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
              <FontAwesome name='instagram' size={width * 0.15} color={COLORS.parchment} />
            </TouchableOpacity>

            <TouchableOpacity onPress={generalShareHandler}>
              <Feather name='share' size={width * 0.13} color={COLORS.parchment} />
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};
