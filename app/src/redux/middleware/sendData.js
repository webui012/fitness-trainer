import { put, takeEvery, call } from 'redux-saga/effects';
import ActionTypes from '../constants';
import Api from '../Api';


function* pageDataLoadingAsync(action) {
    try {
        const data = yield call(Api.dataSales);

        yield put({ type: ActionTypes.PAGE_SALES_SUCCESS, data});
    } catch (e) {
        yield put({type: ActionTypes.ERROR});
    }
}

export default function* sendData() {
    yield takeEvery(ActionTypes.PAGE_SALES_WAIT, pageDataLoadingAsync);
}