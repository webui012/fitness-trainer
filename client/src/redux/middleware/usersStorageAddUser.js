import { put, takeEvery, call } from 'redux-saga/effects';

import {
  SIGNIN_SAVE_DATA_REQUEST,
  SIGNIN_SAVE_DATA_SUCCESS,
  // ACTION_FAILURE
} from '../constants';

import {SignInSaveData} from '../Api/usersStorageApi';

function* signInSaveDataAsync(action) {
  try {
    const value = yield call(SignInSaveData, action.payload);
    yield put({ type: SIGNIN_SAVE_DATA_SUCCESS, value });
  } catch (e) {
     console.log("fail");
  }
}

export default function* usersStorageAddUser() {
  yield takeEvery(SIGNIN_SAVE_DATA_REQUEST, signInSaveDataAsync);
}
