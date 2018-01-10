import { all } from 'redux-saga/effects';
import sendData from './sendData';
import pageLoading from './pageLoading';
import pageLoadingContacts from './pageLoadingContacts';
import pageAboutGetStaticData from './page_About_getStaticData';

export default function * rootSaga() {
  yield all([
    sendData(),
    pageLoading(),
    pageLoadingContacts(),
    pageAboutGetStaticData()
  ])
}
