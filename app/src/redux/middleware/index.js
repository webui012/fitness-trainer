import { all } from 'redux-saga/effects';
import sendData from './sendData';
import pageLoading from './pageLoading';

export default function* rootSaga() {
  yield all([
    sendData(),
    pageLoading()
  ])
}
