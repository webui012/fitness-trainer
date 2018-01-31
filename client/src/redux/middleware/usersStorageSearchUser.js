import { put, takeEvery, call } from 'redux-saga/effects';

import {
  LOGIN_SEARCH_DATA_REQUEST,
  LOGIN_SEARCH_DATA_SUCCESS,
  // ACTION_FAILURE
} from '../constants';

import {logInSearchData} from '../Api/usersStorageApi';

function* logInSearchDataAsync(action) {
  try {
    const value = yield call(logInSearchData, action.payload);
    console.log(value);
    yield put({ type: LOGIN_SEARCH_DATA_SUCCESS, value });
  } catch (e) {
     console.log("fail");
  }
}

export default function* usersStorageSearchUser() {
  yield takeEvery(LOGIN_SEARCH_DATA_REQUEST, logInSearchDataAsync);
}
