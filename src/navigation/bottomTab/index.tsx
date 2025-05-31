/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {BottomTabParamList} from '../navigation-model/bottomModels';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screen/app/homeScreen';
import SearchScreen from '@/screen/app/searchScreen';
import NotificationScreen from '@/screen/app/notificationScreen';
import AccountScreen from '@/screen/app/messageScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Platform, StyleSheet, View} from 'react-native';
import {scale} from '@/theme/scale';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@/theme/colors';
import {FontSize} from '@/theme/font-size';
import {typography} from '@/theme/typography';
import MessageScreen from '@/screen/app/messageScreen';
import ProfileScreen from '@/screen/app/profileScreen';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        keyboardHidesTabBar: true,
        tabBarIcon: ({focused, size}) => {
          let iconName: string = 'camera';
          if (route?.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home';
          } else if (route?.name === 'SearchScreen') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'MessageScreen') {
            iconName = focused ? 'message' : 'message';
          } else if (route.name === 'NotificationScreen') {
            iconName = focused ? 'notifications-none' : 'notifications-none';
          } else if (route.name === 'ProfieScreen') {
            iconName = focused ? 'person-outline' : 'person-outline';
          }
          return (
            <View style={styles.tabContainer}>
              <MaterialIcons
                name={iconName}
                size={scale(focused ? 25 : 25)}
                color={focused ? colors.white : colors.icon}
              />
            </View>
          );
        },
        headerShown: false,
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: scale(12),
        },
        tabBarActiveTintColor: '#1DA1F2',
        tabBarStyle: {
          height:
            Platform?.OS === 'ios'
              ? scale(30 + useSafeAreaInsets().bottom)
              : scale(60),
          backgroundColor: colors.bgTab,
          position: 'absolute',
          bottom: scale(28),
          borderRadius: scale(30),
          marginHorizontal: scale(14),
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
      <Tab.Screen
        name="MessageScreen"
        component={MessageScreen}
      />
      <Tab.Screen
        name="ProfieScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: scale(100),
  },
  textStyle: {
    fontSize: FontSize.FONT_12Px,
    fontFamily: typography.medium,
  },
});
