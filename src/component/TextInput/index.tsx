import {Image, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors} from '@/theme/colors';
import assets from '@/assets';
import {IInputProps} from './props';

const TextInputComponent = (props: IInputProps) => {
  const {value, onChangeText, placeholder, secureTextEntry} = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors?.placeholderText}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
      {secureTextEntry && (
        <Image
          source={assets?.eye}
          style={styles.eyeStyle}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

export default TextInputComponent;
