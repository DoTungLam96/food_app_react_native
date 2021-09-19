import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from '../components/account.style';
import {Spacer} from '../../restaurants/components/spacer/spacer.component';
export const AccountScreen = ({navigation}) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          onPress={() => navigation.navigate('Login')}
          icon="lock-open-outline"
          mode="contained">
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          onPress={() => navigation.navigate('RegisterScreen')}
          icon="email"
          mode="contained">
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
