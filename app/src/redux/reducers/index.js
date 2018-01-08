import { combineReducers } from 'redux';
import sendDataSpinner from './sendData';
import AboutUs from './pageLoading';
import Contacts from './pageLoadingContacts';
import validationAboutUs from './validationAboutUs';
import login from './userLogin';

const rootReducer = combineReducers({
  sendDataSpinner,
  AboutUs,
  Contacts,
  validationAboutUs,
  login
});

export default rootReducer;
