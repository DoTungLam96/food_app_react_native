import React, {useState, createContext} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {loginRequest} from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
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
        console.log(data);
        setUser(data);
      })
      .finally(() => setLoading(false));
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
