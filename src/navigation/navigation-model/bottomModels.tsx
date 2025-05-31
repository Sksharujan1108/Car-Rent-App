import { MessageStackParamList } from './appStackModel/messageModel';
import { HomeStackParamList } from './appStackModel/homeModel';
import { NotificationStackParamList } from './appStackModel/notificationModel';
import { SearchStackParamList } from './appStackModel/searchModel';
import { ProfileStackParamList } from './appStackModel/profileModel';


export type BottomTabParamList = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  MessageScreen: undefined;
  NotificationScreen: undefined;
  ProfieScreen: undefined;

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
  }
};
