import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from '../../Api/auth';
import { USER_SIGNUP, SIGNUP_SUCCEEDED, SIGNUP_FAILED } from '../../constants';

function* signup(action) {
  try {
    yield delay(1000)
    const user = yield call(api.signup, action.data);

    yield put({
      type: SIGNUP_SUCCEEDED,
      isLoading: !action.isLoading,
      user
    });

    } catch (e) {
      yield put({ type: SIGNUP_FAILED, message: e.message });
  }
}

export default function* watchLogin() {
  yield takeEvery(USER_SIGNUP, signup);
}
