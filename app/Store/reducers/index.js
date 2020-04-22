import {combineReducers} from 'redux';
import User from './user-reducer';
import News from './news-reducer';

const rootReducer = combineReducers({
  User,
  News,
});

export default rootReducer;
