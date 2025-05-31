import { TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './styles';

interface IOtpComponentProps {
  onOTPChange?: (otp: string) => void;
}

const OtpComponent = (props: IOtpComponentProps) => {
  const {onOTPChange} = props;
  const inputRef = useRef<Array<TextInput | null>>([]);
  const length = 4;
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));

  const handleChange = (text: string, index: number) => {
    if (/^\d*$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      onOTPChange?.(newOtp.join(''));

      // Move to the next input if the current input is filled
      if (index < length - 1 && text) {
        inputRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);

      onOTPChange?.(newOtp.join(''));

      inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((_, index) => (
        <TextInput
          style={styles.input}
          key={index}
          ref={ref => (inputRef.current[index] = ref)}
          keyboardType="numeric"
          maxLength={1}
          value={otp[index]}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={e => handleKeyPress(e, index)}
          blurOnSubmit={false}
          autoFocus={index === 0} // Focus on the first input initially
          importantForAutofill="no"
        />
      ))}
    </View>
  );
};

export default OtpComponent;
