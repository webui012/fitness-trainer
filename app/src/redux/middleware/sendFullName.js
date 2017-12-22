import { delay } from 'redux-saga';
import { put, takeEvery, call } from 'redux-saga/effects';
import actions from '../constants';

export function* fetchAsyncData() {//action
  //const data =
  yield call(delay, 5000);//API.sendData(data);
  yield put({ type: 'DELETE_WAIT_SEND_DATA' });//, payload: data
}

export default function* fetchData() {
  yield takeEvery('WAIT_SEND_DATA', fetchAsyncData);
}


// class API {
//   sendData(data) {
//      //return fetch('http://asdas.asdasd').then((res) => res.json())
//     return New Promise((res, rej) => {
//       setTimeout(() => { res({code: 200}); }, 2000);
//     });
//   }
// }