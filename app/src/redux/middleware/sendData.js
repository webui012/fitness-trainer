import { delay } from 'redux-saga';
import { put, takeEvery, call } from 'redux-saga/effects';
import ActionTypes from '../constants';

export function* sendAsyncData() {
    yield call(delay, 2500);
    yield put({ type: 'DELETE_WAIT_PAGE' });
}

export default function* sendData() {
    yield takeEvery('WAIT_PAGE', sendAsyncData);
}
