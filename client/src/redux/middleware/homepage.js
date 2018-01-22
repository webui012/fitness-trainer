import { put, takeEvery, call } from 'redux-saga/effects';
import { HOMEPAGE_REQUEST, HOMEPAGE_SUCCEEDED, HOMEPAGE_FAILED } from '../constants';
import { delay } from 'redux-saga'

import * as api from '../Api/homepage';

function* fetchHomepage(action) {
  try {
    const data = yield call(api.fetchHomepage);
    yield delay(1000)
    yield put({
      type: HOMEPAGE_SUCCEEDED,
      isLoading: !action.isLoading,
      data
     });
  } catch (e) {
    yield put({ type: HOMEPAGE_FAILED });
  }
}

export default function* watchFetchHomepage() {
  yield takeEvery(HOMEPAGE_REQUEST, fetchHomepage);
}
