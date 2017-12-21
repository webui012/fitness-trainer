import { all } from 'redux-saga/effects';
import fetchData from './sendFullName';

export default function* rootSaga() {
  yield all([
    fetchData()
  ])
}
