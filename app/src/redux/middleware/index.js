import { all } from 'redux-saga/effects';
import showSalesPage from './Sales/sales';
import aboutUsSendDataForm from './aboutUsSendDataForm';
import aboutUsGetData from './aboutUsGetData';
import contactsGetData from './contactsGetData';
import pageAboutGetStaticData from './page_About_getStaticData';

export default function * rootSaga() {
  yield all([
    aboutUsSendDataForm(),//senddata
    aboutUsGetData(),//laoding
    contactsGetData(),//contasts
    showSalesPage(),
    pageAboutGetStaticData()
  ])
}
