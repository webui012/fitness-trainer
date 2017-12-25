import { all } from 'redux-saga/effects';
import sendData from './sendData';

export default function* rootSaga() {
  yield all([
    sendData()
  ])
}
