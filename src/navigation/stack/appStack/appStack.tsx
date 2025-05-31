import React from 'react';
import BottomTab from '@/navigation/bottomTab';
import { AppStackParamList } from '@/navigation/navigation-model/appStackModel/appModel';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './homeStack';
import SearchStack from './searchStack';
import NotificationStack from './notificationStack';
import MessageStack from './messageStack';

const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="SearchStack" component={SearchStack} />
      <Stack.Screen name="NotificationStack" component={NotificationStack} />
      <Stack.Screen name="MessageStack" component={MessageStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
