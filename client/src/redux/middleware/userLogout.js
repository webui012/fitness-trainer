import { put, takeEvery, call } from 'redux-saga/effects';

import {
  AUTHENTICATION_SET_FETCHED_ROLE,
//   LOGIN_SEARCH_DATA_SUCCESS,
//   // ACTION_FAILURE
} from '../constants';

import {logoutUser} from '../Api/usersStorageApi';

function* logoutUserAsync(action) {
  try {

    const value = yield call(logoutUser);
   console.log(value);
    yield put({ type: AUTHENTICATION_SET_FETCHED_ROLE, value });
  } catch (e) {
     console.log("fail");
  }
}

export default function* userLogout() {
  yield takeEvery('LOGOUT_USER_REQUEST', logoutUserAsync);
}
