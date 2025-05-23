import { Pressable, Text, TextStyle, ViewStyle } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface PrimaryButtonProps {
    containerStyle?: ViewStyle,
    textStyle?: TextStyle,
    label: string;
    onPress: (e: any) => void;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    const { containerStyle, textStyle, label, onPress } = props;
  return (
    <Pressable
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
