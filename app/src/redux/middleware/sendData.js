import { put, takeEvery, call } from 'redux-saga/effects';
import {
  FORM_REQUEST,
  FORM_SUCCESS,
  ACTION_FAILURE
} from '../constants';
import Api from '../Api';

function * sendDataAsync(action) {
   try {
      const userData = yield call(Api.fetchUserData, action.payload);
      yield put({type: FORM_SUCCESS});
   } catch (e) {
<<<<<<< HEAD
=======
      yield put({type: FORM_SUCCESS});
>>>>>>> 948cabc14f3bea1d476e097dd15b77bc44400911
      yield put({type: ACTION_FAILURE});
      console.log('error');
   }
}

export default function* sendData() {
  yield takeEvery(FORM_REQUEST, sendDataAsync);
}