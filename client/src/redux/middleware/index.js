import { all } from 'redux-saga/effects';
import orders from './orders';
import showSalesPage from './sales';
import aboutUsSendDataForm from './aboutUsSendDataForm';
import aboutUsGetData from './aboutUsGetData';
import contactsGetData from './contactsGetData';
import aboutGetStaticData from './aboutGetStaticData';
import serviceOrderPageLoad from './serviceOrderPageLoad';
import servicesPageLoad from './servicesPageLoad';
import serviceOrderFormSendData from './servicOrderFormSendData';

import login from './auth/login';
import logout from './auth/logout';
import signup from './auth/signup';

export default function * rootSaga() {
  yield all([
    login(),
    logout(),
    signup(),
    orders(),
    aboutUsSendDataForm(),
    aboutUsGetData(),
    contactsGetData(),
    showSalesPage(),
    aboutGetStaticData(),
    serviceOrderPageLoad(),
    servicesPageLoad(),
    serviceOrderFormSendData(),
  ]);
}
