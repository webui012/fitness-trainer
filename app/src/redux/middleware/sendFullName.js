import { delay } from 'redux-saga';
import { put, takeEvery, call } from 'redux-saga/effects';
import actions from '../constants';

export function* fetchAsyncData() {
  yield call(delay, 2000);
  yield put({ type: 'DELETE_WAIT_SEND_DATA' });
}

export default function* fetchData() {
  yield takeEvery('WAIT_SEND_DATA', fetchAsyncData);
}
