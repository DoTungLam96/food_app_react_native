import React from 'react';
import {Text, View} from 'react-native';
import {SafeArea} from '../../features/restaurants/components/utilites/safe-components.area';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {AccountScreen} from '../../features/account/screens/account.screen';

const StackNav = createStackNavigator();

export const AccountNavigator = () => (
  <StackNav.Navigator headerMode="none">
    <StackNav.Screen name="CreateAccount" component={AccountScreen} />
    <StackNav.Screen
      name="Login"
      component={() => (
        <View>
          <Text>Login account</Text>
        </View>
      )}
    />
  </StackNav.Navigator>
);
