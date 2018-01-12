import { put, takeEvery, call } from 'redux-saga/effects';
import { delay } from 'redux-saga'
import {
  HOME_PAGE_REQUEST,
  HOME_PAGE_SUCCESS,
  HOME_PAGE_FAILURE
} from '../constants';

import * as api from '../Api/HomePage/homePageApi';

function* loadHomePage(action) {
   try {
      const data = yield call(api.loadHomePage);
      yield put({ type: HOME_PAGE_SUCCESS, data });
      yield delay(1000)
   } catch (e) {
     console.log(e)
      yield put({ type: HOME_PAGE_FAILURE, message: e.message});
   }
}

export default function* watchLoadHomePage() {
  yield takeEvery(HOME_PAGE_REQUEST, loadHomePage);
}
