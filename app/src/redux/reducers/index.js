import { combineReducers } from 'redux';
import login from './userLogin';

const rootReducer = combineReducers({
  login,
})

export default rootReducer;
