import { put, takeEvery, call } from 'redux-saga/effects';

import {
  ADMIN_CABINET_GETDATA_REQUEST,
  ADMIN_CABINET_GETDATA_SUCCESS,
  ACTION_FAILURE,
} from '../constants';

import TransferData from '../Api/transferData';
import constants from '../Api/constants';

const getDataFromServer = () => TransferData.dataServerAdminCabinet(
  constants.localhost8080, constants.adminCabinet
);

function * adminCabinetGetDataAsync(action) {
  try {
    const pageData = yield call(getDataFromServer);

    yield put({ type: ADMIN_CABINET_GETDATA_SUCCESS, payload: pageData });
  } catch (e) {
    yield put({ type: ACTION_FAILURE });
  }
}

export default function * adminCabinetGetData() {
  yield takeEvery(ADMIN_CABINET_GETDATA_REQUEST, adminCabinetGetDataAsync);
};