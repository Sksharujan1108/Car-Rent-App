import { StackScreenProps } from '@react-navigation/stack';

export type AuthStackParamList = {
  OnBoardingScreen: undefined;
  OnBoardingTwoScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = StackScreenProps<
  AuthStackParamList,
  Screen
>;
