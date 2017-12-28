import { combineReducers } from 'redux';
import spinner from './sendData';
import AboutUs from './pageLoading';
import errorMessage from './showErrorMessage';
import validationAboutUs from './validationAboutUs';
import login from './userLogin';

const rootReducer = combineReducers({
  spinner,
  AboutUs,
  validationAboutUs,
  errorMessage,
  login
});

export default rootReducer;
