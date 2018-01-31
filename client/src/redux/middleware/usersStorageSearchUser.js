import { put, takeEvery, call } from 'redux-saga/effects';

import {
  LOGIN_SEARCH_DATA_REQUEST,
  AUTHENTICATION_SET_FETCHED_ROLE,
  // ACTION_FAILURE
} from '../constants';

import {logInSearchData} from '../Api/usersStorageApi';

function* logInSearchDataAsync(action) {
  try {
    const value = yield call(logInSearchData, action.payload);
    console.log(value);
    yield put({ type: AUTHENTICATION_SET_FETCHED_ROLE, value });
  } catch (e) {
     console.log("fail");
  }
}

export default function* usersStorageSearchUser() {
  yield takeEvery(LOGIN_SEARCH_DATA_REQUEST, logInSearchDataAsync);
}
