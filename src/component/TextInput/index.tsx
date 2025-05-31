import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors} from '@/theme/colors';
import assets from '@/assets';
import {IInputProps} from './props';

const TextInputComponent = (props: IInputProps) => {
  const {containerStyle, leftAction, value, onChangeText, placeholder, secureTextEntry, isSecure, onSecurePress, keyboardType} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      {leftAction}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors?.placeholderText}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      {isSecure && (
        <TouchableOpacity onPress={onSecurePress} activeOpacity={0.6}>
          <Image
          source={assets?.eye}
          style={styles.eyeStyle}
          resizeMode="contain"
        />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputComponent;
