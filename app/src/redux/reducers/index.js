import { combineReducers } from 'redux';
import sendDataSpinner from './sendData';
import AboutUs from './pageLoading';
import Contacts from './pageLoadingContacts';
import validationAboutUs from './validationAboutUs';
import login from './userLogin';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';

const rootReducer = combineReducers({
  Header,
  Footer,
  HomePage,
  sendDataSpinner,
  AboutUs,
  Contacts,
  validationAboutUs,
  login
});

export default rootReducer;
