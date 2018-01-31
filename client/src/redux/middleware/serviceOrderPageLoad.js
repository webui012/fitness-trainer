import { put, takeEvery, call } from 'redux-saga/effects';
import {SUCCESS_ORDER_FORM, REQUEST_ORDER_FORM, ACTION_FAILURE} from '../constants';
import { getServiceOrderPage } from '../Api/serviceOrderForm';

function * serviceOrderAsync(action) {
  try {
    const data = yield call(getServiceOrderPage);
    console.log(data);
    yield put({ type: SUCCESS_ORDER_FORM, data });
  } catch (e) {
    yield put({ type: ACTION_FAILURE });
  }
}

export default function * serviceOrderPageLoad() {
  yield takeEvery(REQUEST_ORDER_FORM, serviceOrderAsync);
}
