import { all } from 'redux-saga/effects';
import sendData from './Sales/sales';

export default function* rootSaga() {
    yield all([
        sendData()
    ])
}
