import {GET_GAMES} from '../types';

import axios from 'axios';
import {FIREBASEURL, convertFirebase, findTeamData} from '../../utils/misc';

export function getGames() {
  const promise = new Promise((resolve, reject) => {
    const request = axios({
      method: 'GET',
      url: `${FIREBASEURL}/teams.json`,
    })
      .then(response => {
        const teams = convertFirebase(response.data);
        axios({
          method: 'GET',
          url: `${FIREBASEURL}/games.json`,
        }).then(response => {
          const games = convertFirebase(response.data);
          const responseData = [];
          for (var key in games) {
            responseData.push({
              ...games[key],
              awayData: findTeamData(games[key].away, teams),
              localData: findTeamData(games[key].local, teams),
            });
          }
          resolve(responseData);
        });
      })
      .catch(e => {
        reject(false);
      });
  });

  return {
    type: GET_GAMES,
    payload: promise,
  };
}
