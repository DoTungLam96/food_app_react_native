import React, {useContext} from 'react';
import {AuthenticationContext} from '../../services/authentication/authentication.context';
import {AppNavigator} from './app.navigation';
import {AccountNavigator} from './account.navigator';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

export const Navigation = () => {
  const {isAuthenticated} = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
