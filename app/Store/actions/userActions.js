import axios from 'axios';
import {SIGN_IN, SIGN_UP} from '../types';

export function signUp() {
  return {
    type: SIGN_UP,
    payload: {
      email: 'francis@gmail.com',
      token: 'sldfjqlkjsldkfj',
    },
  };
}

export function signIn() {
  return {
    type: SIGN_IN,
    payload: {
      email: 'francis@gmail.com',
      token: 'sldfjqlkjsldkfj',
    },
  };
}
