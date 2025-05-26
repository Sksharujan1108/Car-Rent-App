import { Modal, Pressable, View } from 'react-native';
import React from 'react';
import { IBottomSheetProps } from './props';
import { styles } from './styles';

const BootmSheet = (props: IBottomSheetProps) => {
    const { visible, setVisible, children } = props;
  return (
    <Modal
        presentationStyle="overFullScreen"
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
            setVisible(false);
        }}
    >
        <Pressable
          style={styles.dim}
        >
            <View style={styles.modalOverLay}>{children}</View>
        </Pressable>
    </Modal>
  );
};

export default BootmSheet;
