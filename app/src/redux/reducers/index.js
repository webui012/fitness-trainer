import { combineReducers } from 'redux';
import usersStoreReducer from './usersStoreReducer';
import { reducer as formReducer } from 'redux-form'

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
import login from './userLogin';
import { orderForm } from './serviceOrderForm'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
<<<<<<< HEAD
	usersStoreReducer,
	form: formReducer
})
=======
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
  login,
  sales,
  form: formReducer
});

export default rootReducer;
>>>>>>> 35eee0e83a5dab622cf7756ab4b99d0460ff42ee

