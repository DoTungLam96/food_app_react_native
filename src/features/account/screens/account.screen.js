import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from '../components/account.style';
import {Spacer} from '../../restaurants/components/spacer/spacer.component';
export const AccountScreen = ({navigation}) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton
          onPress={() => navigation.navigate('Login')}
          icon="lock-open-outline"
          mode="contained">
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton icon="email" mode="contained">
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
