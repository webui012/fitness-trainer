import { put, takeEvery, call } from 'redux-saga/effects';
import {
  ABOUTUS_ACTION_FAILURE,
  CONTACTS_GETDATA_REQUEST,
  CONTACTS_GETDATA_SUCCESS
} from '../constants';
import TransferData from '../Api/transferData';
import constants from '../Api/constants';

const { contacts, localhost8080 } = constants;
const getDataFromServer = () => TransferData.dataLocalContacts(localhost8080, contacts);

function* contactsGetDataAsync(action) {
  try {
    const pageData = yield call(getDataFromServer);

    yield put({ type: CONTACTS_GETDATA_SUCCESS, payload: pageData });
  } catch (e) {
    yield put({ type: ABOUTUS_ACTION_FAILURE });
  }
}

export default function* contactsGetData() {
  yield takeEvery(CONTACTS_GETDATA_REQUEST, contactsGetDataAsync);
}
