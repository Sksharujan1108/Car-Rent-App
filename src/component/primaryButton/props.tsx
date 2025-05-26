import { TextStyle, ViewStyle } from 'react-native';

export interface IPrimaryButtonProps {
    containerStyle?: ViewStyle,
    textStyle?: TextStyle,
    label: string;
    onPress: (e: any) => void;
    child?: React.ReactNode;
}
