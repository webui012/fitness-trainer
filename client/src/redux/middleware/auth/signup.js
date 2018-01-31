import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from '../../Api/auth';
import { USER_SIGNUP, LOGIN_SUCCEEDED, SIGNUP_FAILED } from '../../constants';
import history from '../../../history';

function* signup(action) {
  try {
    const user = yield call(api.signup, action.data);

    yield put({
      type: LOGIN_SUCCEEDED,
      isLoading: !action.isLoading,
      user
    });

    user.isAdmin ?
      history.push('/cabinet/admin') :
      history.push('/cabinet/user')

    } catch (e) {
      yield put({ type: SIGNUP_FAILED, message: e.message });
  }
}

export default function* watchLogin() {
  yield takeEvery(USER_SIGNUP, signup);
}
