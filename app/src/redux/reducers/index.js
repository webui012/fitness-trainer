import { combineReducers } from 'redux';
import error from './sendDataErrorMessage';
import spinner from './sendData';
import AboutUs from './pageLoading';
import validationAboutUs from './validationAboutUs';

const rootReducer = combineReducers({
  error,
  spinner,
  AboutUs,
  validationAboutUs
});

export default rootReducer;
