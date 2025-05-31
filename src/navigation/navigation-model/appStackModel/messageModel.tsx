import { StackScreenProps } from '@react-navigation/stack';

export type MessageStackParamList = {
  MessageScreen: undefined
};

export type MessageStackScreenProps<Screen extends keyof MessageStackParamList> = StackScreenProps<
  MessageStackParamList,
  Screen
>
