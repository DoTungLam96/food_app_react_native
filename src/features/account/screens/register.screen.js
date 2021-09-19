import React, {useState, useContext, useEffect} from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from '../components/account.style';
import {Text} from '../../../components/typography/text.component';
import {Spacer} from '../../../components/spacer/spacer.component';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';
import {useNavigation} from '@react-navigation/native';
export const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const navigatedScreen = useNavigation();

  const {errorRegister, isLoading, setErrorRegister, onRegisterAccount} =
    useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={u => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            secureTextEntry
            textContentType="password"
            autoCapitalize="none"
            onChangeText={p => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Repeated password"
            value={repeatedPassword}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={p => setRepeatedPassword(p)}
          />
        </Spacer>
        {errorRegister && (
          <ErrorContainer size="large">
            <Text variant="error">{errorRegister}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() =>
                onRegisterAccount(
                  email,
                  password,
                  repeatedPassword,
                  navigatedScreen,
                )
              }>
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton
          mode="contained"
          onPress={() => {
            setErrorRegister(null);
            navigation.navigate('AccountScreen');
          }}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
