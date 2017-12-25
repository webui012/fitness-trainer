import { combineReducers } from 'redux';
import error from './sendDataErrorMessage';
import spinner from './sendData';
import load from './pageLoading';

const rootReducer = combineReducers({
  error,
  spinner,
  load
});

export default rootReducer;
