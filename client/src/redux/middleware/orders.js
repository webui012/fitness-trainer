import { put, takeEvery, call } from 'redux-saga/effects';
import { ORDERS_REQUEST, ORDERS_SUCCEEDED, ORDERS_FAILED } from '../constants';
import { delay } from 'redux-saga'

import * as api from '../Api/orders';

function* fetchOrders(action) {
  try {
    const orders = yield call(api.fetchOrders);
    yield delay(1000)
    yield put({
      type: ORDERS_SUCCEEDED,
      isLoading: !action.isLoading,
      orders
     });
  } catch (e) {
    yield put({ type: ORDERS_FAILED });
  }
}

export default function* watchFetchOrders() {
  yield takeEvery(ORDERS_REQUEST, fetchOrders);
}
