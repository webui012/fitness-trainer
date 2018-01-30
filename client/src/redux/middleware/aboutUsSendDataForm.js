import { put, takeEvery, call } from 'redux-saga/effects';
import {
  ABOUTUS_FORM_REQUEST,
  ABOUTUS_FORM_ABOUTUS_SUCCESS,
  ABOUTUS_ACTION_FAILURE,
} from '../constants';
import TransferData from '../Api/transferData';
import constants from '../Api/constants';

const getDataFromServer = data => TransferData.personalDataSendToServer(
  data,
  constants.localhost8080,
  constants.sendFormData
);

function* aboutUsSendDataFormAsync(action) {
  try {
    const userData = yield call(getDataFromServer, action.payload);

    yield put({ type: ABOUTUS_FORM_ABOUTUS_SUCCESS });
  } catch (e) {
    yield put({ type: ABOUTUS_ACTION_FAILURE });
  }
}

export default function* aboutUsSendDataForm() {
  yield takeEvery(ABOUTUS_FORM_REQUEST, aboutUsSendDataFormAsync);
}
