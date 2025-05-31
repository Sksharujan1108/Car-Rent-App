import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NotificationStackParamList } from '@/navigation/navigation-model/appStackModel/notificationModel';
import NotificationScreen from '@/screen/app/notificationScreen';

const Stack = createNativeStackNavigator<NotificationStackParamList>();

const NotificationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="NotificationScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default NotificationStack;
