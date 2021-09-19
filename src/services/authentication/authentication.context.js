import React, {useState, createContext} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import auth from '@react-native-firebase/auth';
import {loginRequest} from './authentication.service';
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [errorRegister, setErrorRegister] = useState(null);

  const onLogin = (email, password, navigatedScreen) => {
    if (email === '' || password === '') {
      setError('Email or password do not empty');
      return;
    }
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        setError(`${err}`);
      })
      .then(data => {
        if (data !== undefined) {
          setError(null);
          setUser(data);
        }
      })
      .finally(() => setLoading(false));
  };

  const onRegisterAccount = (
    email,
    password,
    repeatedPassword,
    navigatedScreen,
  ) => {
    if (password === '' || email === '' || repeatedPassword === '') {
      setErrorRegister('Email or password do not empty.');
      return;
    }
    if (password !== repeatedPassword) {
      setErrorRegister('Password do not match together.');
      return;
    }
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => setErrorRegister(`${err}`))
      .then(res => {
        if (res !== undefined) {
          setErrorRegister(null);
          ToastAndroid.show('Congrats! register success.', ToastAndroid.SHORT);
          navigatedScreen.navigate('Login', {email: email, password: password});
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegisterAccount,
        errorRegister,
        setErrorRegister,
        setError,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
