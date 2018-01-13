import { put, takeEvery, call } from 'redux-saga/effects';
import { PAGE_SALES_WAIT, PAGE_SALES_SUCCESS } from '../../constants/sales';
import Api from '../../Api/sales';


function* pageDataLoadingAsync(action) {
  try {
    const data = yield call(Api.dataSales);

    yield put({ type: PAGE_SALES_SUCCESS, data });
  } catch (e) {
    yield put({type: ERROR});
  }
}

export default function* showSalesPage() {
  yield takeEvery(PAGE_SALES_WAIT, pageDataLoadingAsync);
}
