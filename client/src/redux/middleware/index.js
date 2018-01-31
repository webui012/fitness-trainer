import { all } from 'redux-saga/effects';
import showSalesPage from './sales';
import aboutUsSendDataForm from './aboutUsSendDataForm';
import aboutUsGetData from './aboutUsGetData';
import contactsGetData from './contactsGetData';
import aboutGetStaticData from './aboutGetStaticData';
import usersStorageAddUser from './usersStorageAddUser';
import usersStorageSearchUser from './usersStorageSearchUser';
import userLogout from './userLogout';

export default function * rootSaga() {
  yield all([
    aboutUsSendDataForm(),
    aboutUsGetData(),
    contactsGetData(),
    showSalesPage(),
    aboutGetStaticData(),
    usersStorageAddUser(),
    usersStorageSearchUser(),
    userLogout(),
  ]);
}
