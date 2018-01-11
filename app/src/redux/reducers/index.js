import { combineReducers } from 'redux';
import header from './header';
import footer from './footer';
import homePage from './homePage';
import adminOrders from './adminOrders';
import userOrders from './userOrders';
import ordersVisibilityFilter from './ordersVisibilityFilter';
import sendDataSpinner from './sendData';
import pageAboutGetStaticData from './page_About_getStaticData';
import AboutUs from './pageLoading';
import Contacts from './pageLoadingContacts';
import validationAboutUs from './validationAboutUs';
import login from './userLogin';

const rootReducer = combineReducers({
  header,
  footer,
  homePage,
  adminOrders,
  userOrders,
  ordersVisibilityFilter,
  sendDataSpinner,
  pageAboutGetStaticData,
  AboutUs,
  Contacts,
  validationAboutUs,
  login
});

export default rootReducer;
