import AsyncStorage from '@react-native-community/async-storage';

export const FIREBASEURL = 'https://react-native-nba-45cf8.firebaseio.com';
export const APIKEY = 'AIzaSyDHqOM9kQIv_MlY6g69fHbA-Ta0m7wUNqM';
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;

export const getTokens = callback => {
  AsyncStorage.multiGet([
    '@nba_app@token',
    '@nba_app@refreshToken',
    '@nba_app@expireToken',
    '@nba_app@uid',
  ]).then(response => {
    callback(response);
  });
};

export const setTokens = (values, callback) => {
  const dateNow = new Date();
  const expiration = dateNow.getTime() + 3600 * 1000;

  AsyncStorage.multiSet([
    ['@nba_app@token', values.token],
    ['@nba_app@refreshToken', values.refToken],
    ['@nba_app@expireToken', expiration.toString()],
    ['@nba_app@uid', values.uid],
  ]).then(response => {
    callback();
  });
};
