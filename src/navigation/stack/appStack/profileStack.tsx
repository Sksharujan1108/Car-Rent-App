import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '@/screen/app/profileScreen';
import { ProfileStackParamList } from '@/navigation/navigation-model/appStackModel/profileModel';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfieStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfieStack;
