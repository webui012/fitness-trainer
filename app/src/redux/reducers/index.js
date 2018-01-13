import { combineReducers } from 'redux';

import sales from './Sales/sales';
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
import usersStoreReducer from './usersStoreReducer';
import { orderForm } from './serviceOrderForm';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  header,
  footer,
  homePage,
  adminOrders,
  userOrders,
  ordersVisibilityFilter,
  sendDataSpinner,
  orderForm,
  pageAboutGetStaticData,
  AboutUs,
  Contacts,
  validationAboutUs,
  usersStoreReducer,
  sales,
  form: formReducer
});

export default rootReducer;
