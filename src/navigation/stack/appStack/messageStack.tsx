import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MessageStackParamList } from '@/navigation/navigation-model/appStackModel/messageModel';
import MessageScreen from '@/screen/app/messageScreen';

const Stack = createNativeStackNavigator<MessageStackParamList>();

const MessageStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MessageScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
    </Stack.Navigator>
  );
};

export default MessageStack;
