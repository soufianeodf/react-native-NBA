import {GET_GAMES} from '../types';

import axios from 'axios';
import {FIREBASEURL, convertFirebase} from '../../utils/misc';

export function getGames() {
  const promise = new Promise((resolve, reject) => {
    const request = axios({
      method: 'GET',
      url: `${FIREBASEURL}/teams.json`,
    }).then(response => {
      const teams = convertFirebase(response.data);
      const request = axios({
        method: 'GET',
        url: `${FIREBASEURL}/games.json`,
      }).then(response => {
        const games = convertFirebase(response.data);
      });
    });
  });

  return {
    type: GET_GAMES,
    payload: "something",
  };
}
