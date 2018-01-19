import { put, takeEvery, call } from 'redux-saga/effects';
import {
  ABOUTUS_ACTION_FAILURE,
  PAGE_CONTACTS_GETDATA_REQUEST,
  PAGE_CONTACTS_GETDATA_SUCCESS
} from '../constants';
// import Api from '../Api';
import TransferData from '../Api/transferData';

function * contactsGetDataAsync(action) {
  try {
    //const pageData = yield call(Api.dataLocalContacts);
    const pageData = yield call(TransferData.dataLocalContacts);
    console.log(`m:${pageData}`);

    yield put({ type: PAGE_CONTACTS_GETDATA_SUCCESS, payload: pageData });
  } catch (e) {
    yield put({ type: ABOUTUS_ACTION_FAILURE });
  }
}

export default function * contactsGetData() {
  yield takeEvery(PAGE_CONTACTS_GETDATA_REQUEST, contactsGetDataAsync);
}
