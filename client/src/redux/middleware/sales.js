import { put, takeEvery, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { PAGE_SALES_WAIT, PAGE_SALES_SUCCESS } from '../constants';
import Api from '../Api/sales';



function * pageDataLoadingAsync(action) {
  try {
    const data = yield call(Api.dataSales);

    yield delay(1500);
    yield put({ type: PAGE_SALES_SUCCESS, data });
    } catch (e) {
      yield put({ type: 'ERROR' });
  }
}

export default function * showSalesPage() {
    yield takeEvery(PAGE_SALES_WAIT, pageDataLoadingAsync);
}
