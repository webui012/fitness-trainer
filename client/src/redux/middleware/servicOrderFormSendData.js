import { put, takeEvery, call } from 'redux-saga/effects';
import {
  SERVICE_ORDER_FORM_SUCCESS,
  SERVICE_ORDER_FORM_REQUEST,
  ABOUTUS_ACTION_FAILURE,
} from '../constants';
import {createNewOrder} from '../Api/serviceOrderForm';

const getDataFromServer = data => createNewOrder(data);

function* serviceOrderFormDataSend(action) {
  try {
    const serviceOrderData = yield call(getDataFromServer, action.data);

    yield put({ type: SERVICE_ORDER_FORM_SUCCESS, serviceOrderData });
  } catch (e) {
    yield put({ type: ABOUTUS_ACTION_FAILURE });
  }
}

export default function* serviceOrderFormSend() {
  yield takeEvery(SERVICE_ORDER_FORM_REQUEST, serviceOrderFormDataSend);
}
