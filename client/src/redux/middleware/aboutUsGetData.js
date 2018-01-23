import { put, takeEvery, call } from 'redux-saga/effects';
import {
  ABOUTUS_ACTION_FAILURE,
  PAGE_ABOUTUS_GETDATA_REQUEST,
  PAGE_ABOUTUS_GETDATA_SUCCESS
} from '../constants';
//import Api from '../Api';
import TransferData from '../Api/transferData';

function* aboutUsGetDataAsync(action) {
  try {
    //const pageData = yield call(Api.dataLocal);
    const pageData = yield call(TransferData.dataServerUserCabinet);

    yield put({ type: PAGE_ABOUTUS_GETDATA_SUCCESS, payload: pageData });
  } catch (e) {
    yield put({ type: ABOUTUS_ACTION_FAILURE });
  }
}

export default function* aboutUsGetData() {
  yield takeEvery(PAGE_ABOUTUS_GETDATA_REQUEST, aboutUsGetDataAsync);
}

