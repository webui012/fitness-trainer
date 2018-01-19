import { put, takeEvery, call } from 'redux-saga/effects';

import getData from '../Api/orders';

function* fetchOrders(action) {
  try {
    const payload = yield call(getData);
    yield put({ type: 'ORDERS_SUCCEEDED', payload });
  } catch (e) {
    yield put({ type: 'ORDERS_FAILED' });
  }
}

export default function* watchFetchOrders() {
  yield takeEvery('ORDERS_REQUEST', fetchOrders);
}
