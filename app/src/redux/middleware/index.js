import { all } from 'redux-saga/effects';
import showSalesPage from './Sales/sales';
import sendData from './sendData';
import pageLoading from './pageLoading';
import pageLoadingContacts from './pageLoadingContacts';
import pageAboutGetStaticData from './page_About_getStaticData';

export default function* rootSaga() {
  yield all([
    sendData(),
    pageLoading(),
    pageLoadingContacts(),
<<<<<<< HEAD
    showSalesPage()
=======
    pageAboutGetStaticData()
>>>>>>> ebf1dd8ae7f2b7e185e3840feee1aeed9f596882
  ])
}
