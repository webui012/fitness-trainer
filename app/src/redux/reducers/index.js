import { combineReducers } from 'redux';
import error from './sendDataErrorMessage';
import spinner from './sendData';

const rootReducer = combineReducers({
  error,
  spinner
});

export default rootReducer;
