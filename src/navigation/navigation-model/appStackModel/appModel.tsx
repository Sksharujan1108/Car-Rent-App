import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from './homeModel';
import {SearchStackParamList} from './searchModel';
import {MessageStackParamList} from './messageModel';
import {NotificationStackParamList} from './notificationModel';
import {ProfileStackParamList} from './profileModel';

export type AppStackParamList = {
  BottomTab: undefined;

  HomeStack: {
    screen: keyof HomeStackParamList;
    params?: HomeStackParamList[keyof HomeStackParamList];
  };
  SearchStack: {
    screen: keyof SearchStackParamList;
    params?: SearchStackParamList[keyof SearchStackParamList];
  };
  MessageStack: {
    screen: keyof MessageStackParamList;
    params?: MessageStackParamList[keyof MessageStackParamList];
  };
  NotificationStack: {
    screen: keyof NotificationStackParamList;
    params?: NotificationStackParamList[keyof NotificationStackParamList];
  };
  ProfieStack: {
    screen: keyof ProfileStackParamList;
    params?: ProfileStackParamList[keyof ProfileStackParamList];
  };
};

export type AppStackScreenProps<Screen extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, Screen>;
