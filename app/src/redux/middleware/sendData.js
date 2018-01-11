import { put, takeEvery, call } from 'redux-saga/effects';
import { FORM_REQUEST, FORM_SUCCESS, ACTION_FAILURE } from '../constants';
import Api from '../Api';

function * sendDataAsync(action) {
  try {
    const userData = yield call(Api.fetchUserData, action.payload);
    yield put({type: FORM_SUCCESS, payload: {userId: action.payload.userId}});
  } catch (e) {
    yield put({type: ACTION_FAILURE, payload: {userId: action.payload.userId}});
  }
}

export default function * sendData() {
  yield takeEvery(FORM_REQUEST, sendDataAsync);
}
