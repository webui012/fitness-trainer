import { combineReducers } from 'redux';

import sales from './Sales/sales';
import header from './header';
import footer from './footer';
import homePage from './homePage';
import adminOrders from './adminOrders';
import userOrders from './userOrders';
import ordersVisibilityFilter from './ordersVisibilityFilter';
import aboutUsSendDataForm from './aboutUsSendDataForm';
import aboutGetStaticData from './aboutGetStaticData';
import aboutUsGetData from './aboutUsGetData';
import contactsGetData from './contactsGetData';
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
  orderForm,
  aboutUsSendDataForm,
  aboutGetStaticData,
  aboutUsGetData,
  contactsGetData,
  validationAboutUs,
  usersStoreReducer,
  sales,
  form: formReducer,
});

export default rootReducer;
