import { put, takeEvery, call } from 'redux-saga/effects';
import {SUCCESS_SERVICES_PAGE, REQUEST_SERVICES_PAGE, ACTION_FAILURE} from '../constants';
import loadPage from '../Api/servicesPageLoad';

function * servicesPageAsync(action) {
  try {
    const data = yield call(loadPage);

    yield put({ type: SUCCESS_SERVICES_PAGE, data });
  } catch (e) {
    yield put({ type: ACTION_FAILURE });
  }
}

export default function * servicesPageLoad() {
  yield takeEvery(REQUEST_SERVICES_PAGE, servicesPageAsync);
}
