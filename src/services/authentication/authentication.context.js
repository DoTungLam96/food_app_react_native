import React, {useState, createContext} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {loginRequest} from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLoading = (email, password) => {
    setLoading(true);
    loginRequest(email, password)
      .then(data => {
        setUser(data);
      })
      .catch(err => {
        console.log('AuthenticationContextProvide error: ', err);
        setError(err);
      })
      .finally(() => setLoading(false));
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLoading,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
