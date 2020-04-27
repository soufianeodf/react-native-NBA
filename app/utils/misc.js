import AsyncStorage from '@react-native-community/async-storage';

export const FIREBASEURL = 'YOUR_DATABASE_URL';
export const APIKEY = 'YOUR_API_KEY';
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

export const convertFirebase = data => {
  const newData = [];
  for (var key in data) {
    newData.push({
      ...data[key],
      id: key,
    });
  }
  return newData;
};

export const findTeamData = (itemId, teams) => {
  const value = teams.find(team => {
    return team.id === itemId;
  });
  return value;
};
