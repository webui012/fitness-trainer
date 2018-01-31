import { put, takeEvery, call } from 'redux-saga/effects';

import {
  SIGNIN_SAVE_DATA_REQUEST,
  AUTHENTICATION_SET_FETCHED_ROLE,
  // ACTION_FAILURE
} from '../constants';

import {SignInSaveData} from '../Api/usersStorageApi';

function* signInSaveDataAsync(action) {
  try {
    const value = yield call(SignInSaveData, action.payload);
    console.log("hello", value);

    yield put({ type: AUTHENTICATION_SET_FETCHED_ROLE, value });
  } catch (e) {
     console.log("fail");
  }
}

export default function* usersStorageAddUser() {
  yield takeEvery(SIGNIN_SAVE_DATA_REQUEST, signInSaveDataAsync);
}
