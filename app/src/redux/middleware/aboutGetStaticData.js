import { put, takeEvery, call } from 'redux-saga/effects';

import {
  PAGE_ABOUT_GETDATA_REQUEST,
  PAGE_ABOUT_GETDATA_SUCCESS,
  ACTION_FAILURE
} from '../constants';

import getData from '../Api/aboutGetStaticData';

function* pageAboutGetStaticDataAsync(action) {
  try {
    const payload = yield call(getData);
    yield put({ type: PAGE_ABOUT_GETDATA_SUCCESS, payload });
  } catch (e) {
    yield put({ type: ACTION_FAILURE });
  }
}

export default function* pageAboutGetStaticData() {
  yield takeEvery(PAGE_ABOUT_GETDATA_REQUEST, pageAboutGetStaticDataAsync);
}
