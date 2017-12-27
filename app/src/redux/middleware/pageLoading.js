import { put, takeEvery, call } from 'redux-saga/effects';
import {
    PAGE_ABOUTUS_REQUEST,
    PAGE_ABOUTUS_SUCCESS,
    ACTION_FAILURE
} from '../constants';
import Api from '../Api';

function* pageDataLoadingAsync(action) {
    try {
        const pageData = yield call(Api.dataArray());
        yield put({ type: PAGE_ABOUTUS_SUCCESS, payload: pageData});        
    } catch (e) {
        // yield put({type: ACTION_FAILURE});
        console.log('error');
    }
}

export default function* pageDataLoading() {
    yield takeEvery(PAGE_ABOUTUS_REQUEST, pageDataLoadingAsync);
}