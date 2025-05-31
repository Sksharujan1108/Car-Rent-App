import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthStack from './stack/authStack/authStack';
import AppStack from './stack/appStack/appStack';

const Routes = () => {
  const isAuth = false;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
       {isAuth ? <AuthStack /> : <AppStack/> }
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
