import { combineReducers } from 'redux';
import header from './header';
import footer from './footer';
import homePage from './homePage';
import sendDataSpinner from './sendData';
import AboutUs from './pageLoading';
import Contacts from './pageLoadingContacts';
import validationAboutUs from './validationAboutUs';
import login from './userLogin';

const rootReducer = combineReducers({
  header,
  footer,
  homePage,
  sendDataSpinner,
  AboutUs,
  Contacts,
  validationAboutUs,
  login
});

export default rootReducer;
