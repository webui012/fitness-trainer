import { put, takeEvery, call } from 'redux-saga/effects';

// import {
//   LOGIN_SEARCH_DATA_REQUEST,
//   LOGIN_SEARCH_DATA_SUCCESS,
//   // ACTION_FAILURE
// } from '../constants';

import {logoutUser} from '../Api/usersStorageApi';

function* logoutUserAsync(action) {
  try {
     
    const value = yield call(logoutUser);
   console.log(value);
    yield put({ type: 'LOGOUT_USER_SUCCESS', value });
  } catch (e) {
     console.log("fail");
  }
}

export default function* userLogout() {
  yield takeEvery('LOGOUT_USER_REQUEST', logoutUserAsync);
}