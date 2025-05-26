import { JSX } from 'react';
import { KeyboardTypeOptions } from 'react-native';

export interface IInputProps {
    value: string;
    onChangeText: (value: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    disabled?: boolean;
    isSecure?: boolean;
    onSecurePress?: (e: any) => void;
    leftAction?: JSX.Element;
    keyboardType?: KeyboardTypeOptions | undefined;
}
