import {
  ADMIN_CABINET_GETDATA_REQUEST,
  ADMIN_CABINET_GETDATA_SUCCESS
 } from '../constants';

export const adminCabinetGetData = () => ({
  type: ADMIN_CABINET_GETDATA_REQUEST,
});

export const adminCabinetGetDataEnd = data => ({
  type: ADMIN_CABINET_GETDATA_SUCCESS,
  payload: data,
});