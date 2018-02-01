import { combineReducers } from 'redux';

import auth from './auth';
import sales from './sales';
import header from './header';
import footer from './footer';
import homePage from './homePage';
import orders from './orders';
import userOrders from './userOrders';
import ordersVisibilityFilter from './ordersVisibilityFilter';
import aboutUsSendDataForm from './aboutUsSendDataForm';
import aboutGetStaticData from './aboutGetStaticData';
import aboutUsGetData from './aboutUsGetData';
import contactsGetData from './contactsGetData';
import validationAboutUs from './validationAboutUs';
import usersStoreReducer from './usersStoreReducer';
import serviceOrderForm from './serviceOrderForm';
import servicesPage from './servicesPage';
import serviceOrderFormDataSend from './serviceOrderFormDataSend';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth,
  header,
  footer,
  homePage,
  orders,
  userOrders,
  ordersVisibilityFilter,
  serviceOrderForm,
  aboutUsSendDataForm,
  aboutGetStaticData,
  aboutUsGetData,
  contactsGetData,
  validationAboutUs,
  usersStoreReducer,
  sales,
  servicesPage,
  serviceOrderFormDataSend,
  form: formReducer,
});

export default rootReducer;
