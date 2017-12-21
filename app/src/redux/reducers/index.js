import { combineReducers } from 'redux';
import error from './sendDataErrorMessage';
import spinner from './waitSendData';

const rootReducer = combineReducers({
  error,
  spinner
});

export default rootReducer;
