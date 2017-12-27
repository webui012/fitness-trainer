import { combineReducers } from 'redux';
import spinner from './sendData';
import load from './pageLoading';
import errorMessage from './showErrorMessage';
import validationAboutUs from './validationAboutUs';

const rootReducer = combineReducers({
  spinner,
  load,
  validationAboutUs,
  errorMessage
});

export default rootReducer;
