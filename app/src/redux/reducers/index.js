import { combineReducers } from 'redux';
import error from './sendDataErrorMessage';
import spinner from './sendData';
import load from './pageLoading';
import validationAboutUs from './validationAboutUs';

const rootReducer = combineReducers({
  error,
  spinner,
  load,
  validationAboutUs
});

export default rootReducer;
