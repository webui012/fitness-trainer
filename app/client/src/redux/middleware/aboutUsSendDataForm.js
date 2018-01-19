import { put, takeEvery, call } from 'redux-saga/effects';
import {
  ABOUTUS_FORM_REQUEST,
  ABOUTUS_FORM_ABOUTUS_SUCCESS,
  ABOUTUS_ACTION_FAILURE,
} from '../constants';
import sendData from '../Api/aboutUsSendDataForm';

function* aboutUsSendDataFormAsync(action) {
  try {
    const userData = yield call(sendData, action.payload);

    yield put({ type: ABOUTUS_FORM_ABOUTUS_SUCCESS });
  } catch (e) {
    yield put({ type: ABOUTUS_ACTION_FAILURE });
  }
}

export default function* aboutUsSendDataForm() {
  yield takeEvery(ABOUTUS_FORM_REQUEST, aboutUsSendDataFormAsync);
}
