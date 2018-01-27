import { put, takeEvery, call } from 'redux-saga/effects';
import {
  ABOUTUS_ACTION_FAILURE,
  ABOUTUS_GETDATA_REQUEST,
  ABOUTUS_GETDATA_SUCCESS
} from '../constants';
import TransferData from '../Api/transferData';
import constants from '../Api/constants';

const { userCabinet, localhost8080 } = constants;
const getDataFromServer = () => TransferData.dataServerUserCabinet(localhost8080, userCabinet);

function* aboutUsGetDataAsync(action) {
  try {
    const pageData = yield call(getDataFromServer);

    yield put({ type: ABOUTUS_GETDATA_SUCCESS, payload: pageData });
  } catch (e) {
    yield put({ type: ABOUTUS_ACTION_FAILURE });
  }
}

export default function* aboutUsGetData() {
  yield takeEvery(ABOUTUS_GETDATA_REQUEST, aboutUsGetDataAsync);
}
