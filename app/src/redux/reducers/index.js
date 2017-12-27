import { combineReducers } from 'redux';
import spinner from './sendData';
import AboutUs from './pageLoading';
import errorMessage from './showErrorMessage';
import validationAboutUs from './validationAboutUs';

const rootReducer = combineReducers({
  spinner,
  AboutUs,
  validationAboutUs,
  errorMessage
});

export default rootReducer;
