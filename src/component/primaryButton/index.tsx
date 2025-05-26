import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { IPrimaryButtonProps } from './props';

const PrimaryButton = (props: IPrimaryButtonProps) => {
    const { containerStyle, textStyle, child, label, onPress } = props;
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.6}
    >
      {child && child}
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
