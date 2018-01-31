import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from '../../Api/auth';
import { USER_LOGIN, LOGIN_SUCCEEDED, LOGIN_FAILED } from '../../constants';
import history from '../../../history';
import setAuthorizationHeader from '../../../utils/setAuthorizationHeader';

function* login(action) {
   try {
      const user = yield call(api.login, action.data);

      localStorage.JWT = user.token;
      setAuthorizationHeader(user.token);

      yield put({
        type: LOGIN_SUCCEEDED,
        isLoading: !action.isLoading,
        user
      });

      user.isAdmin ?
        history.push('/cabinet/admin') :
        history.push('/cabinet/user')
   } catch (e) {
      yield put({ type: LOGIN_FAILED, message: e.message });
   }
}

export default function* watchLogin() {
  yield takeEvery(USER_LOGIN, login);
}
