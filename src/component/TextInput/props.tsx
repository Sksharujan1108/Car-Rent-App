export interface IInputProps {
    value: string;
    onChangeText: (value: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    disabled?: boolean;
}
