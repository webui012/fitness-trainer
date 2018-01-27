import { put, takeEvery, call } from 'redux-saga/effects';
import {
  ABOUT_GETDATA_REQUEST,
  ABOUT_GETDATA_SUCCESS,
  ACTION_FAILURE
} from '../constants';
import getData from '../Api/aboutGetStaticData';
import constants from '../Api/constants';

const getDataFromServer = () => getData(constants.localhost8080, constants.about);

function* pageAboutGetStaticDataAsync(action) {
  try {
    const payload = yield call(getDataFromServer);

    yield put({ type: ABOUT_GETDATA_SUCCESS, payload });
  } catch (e) {
    yield put({ type: ACTION_FAILURE });
  }
}

export default function* pageAboutGetStaticData() {
  yield takeEvery(ABOUT_GETDATA_REQUEST, pageAboutGetStaticDataAsync);
}
