import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/navigation-model/authStackModel/authModel';
import OnBoardingScreen from '@/screen/auth/onboardingScreen';
import OnBoardingTwoScreen from '@/screen/auth/onBoardingTwoScreen';
import LoginScreen from '@/screen/auth/loginScreen';
import SignUpScreen from '@/screen/auth/signUpScreen';


const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnBoardingScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="OnBoardingTwoScreen" component={OnBoardingTwoScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
