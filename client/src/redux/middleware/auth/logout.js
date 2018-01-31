import { put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { USER_LOGOUT, LOGOUT_SUCCEEDED, LOGOUT_FAILED } from '../../constants';
import setAuthorizationHeader from '../../../utils/setAuthorizationHeader';

function* logout(action) {
   try {
     yield delay(1000)
    localStorage.removeItem("JWT");
    setAuthorizationHeader();

    yield put({
      type: LOGOUT_SUCCEEDED,
      isLoading: !action.isLoading,
    });
   } catch (e) {
      yield put({ type: LOGOUT_FAILED, message: e.message });
   }
}

export default function* watchLogout() {
  yield takeEvery(USER_LOGOUT, logout);
}
