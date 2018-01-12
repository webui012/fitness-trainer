import { put, takeEvery, call } from 'redux-saga/effects';
import {
    PAGE_CONTACTS_REQUEST,
    PAGE_CONTACTS_SUCCESS,
    ACTION_FAILURE
} from '../constants';
import Api from '../Api';

function* pageDataLoadingAsync(action) {
    try {
        const pageData = yield call(Api.dataLocalContacts);
        yield put({ type: PAGE_CONTACTS_SUCCESS, payload: pageData });
    } catch (e) {
        yield put({ type: ACTION_FAILURE });
        console.log('error');
    }
}

export default function* pageDataLoading() {
    yield takeEvery(PAGE_CONTACTS_REQUEST, pageDataLoadingAsync);
}