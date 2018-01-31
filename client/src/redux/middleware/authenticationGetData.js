import { put, takeEvery, call } from 'redux-saga/effects';

import {
  AUTHENTICATION_GETDATA_REQUEST,
  AUTHENTICATION_GETDATA_SUCCESS,
  AUTHENTICATION_GETDATA_FAILURE,
} from '../constants';

import getData from '../Api/authenticationGetData';
import constants from '../Api/constants';

const getDataFromServer = () => getData(constants.localhost1312, constants.authentication);

function* authenticationGetDataAsync(action) {
  try {
    const payload = yield call(getDataFromServer);
    yield put({ type: AUTHENTICATION_GETDATA_SUCCESS, payload });
  } catch (e) {
    yield put({ type: AUTHENTICATION_GETDATA_FAILURE });
  }
}

export default function* authenticationGetData() {
  yield takeEvery(AUTHENTICATION_GETDATA_REQUEST, authenticationGetDataAsync);
}
