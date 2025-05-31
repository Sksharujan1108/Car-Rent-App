import { StackScreenProps } from '@react-navigation/stack';

export type NotificationStackParamList = {
  NotificationScreen: undefined
};

export type NotificationStackScreenProps<Screen extends keyof NotificationStackParamList> = StackScreenProps<
  NotificationStackParamList,
  Screen
>
