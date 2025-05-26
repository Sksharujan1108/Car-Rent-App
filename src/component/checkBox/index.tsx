import {Pressable} from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {colors} from '@/theme/colors';
import {scale} from '@/theme/scale';
import {ICheckBoxProps} from './props';

const CheckBoxComponent = (props: ICheckBoxProps) => {
  const {
    isChecked = false,
    onPress,
  } = props;

  const [checked, setChecked] = useState(isChecked);
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        setChecked(!checked);
        onPress?.(!checked);
      }}
    >
      {checked && (
        <MaterialIcons
          name="check"
          style={styles.checkIcon}
          color={colors?.white}
          size={scale(20)}
        />
      )}
    </Pressable>
  );
};

export default CheckBoxComponent;
