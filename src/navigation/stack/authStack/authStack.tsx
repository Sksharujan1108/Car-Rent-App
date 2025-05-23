import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/navigation-model/authStackModel/authModel';
import OnBoardingScreen from '@/screen/app/onboardingScreen';
import OnBoardingTwoScreen from '@/screen/app/onBoardingTwoScreen';


const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnBoardingScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="OnBoardingTwoScreen" component={OnBoardingTwoScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
