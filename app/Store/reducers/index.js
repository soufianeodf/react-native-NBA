import {combineReducers} from 'redux';
import User from './user-reducer';
import News from './news-reducer';
import Games from './games-reducer';

const rootReducer = combineReducers({
  User,
  News,
  Games,
});

export default rootReducer;
