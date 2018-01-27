import {
  ABOUTUS_WARNING_MESSAGE,
  ABOUTUS_FORM_REQUEST,
  ABOUTUS_FORM_ABOUTUS_SUCCESS,
  ABOUTUS_ACTION_FAILURE,
  ABOUTUS_CLOSE_ACTION_FAILURE,
  ABOUTUS_GETDATA_REQUEST,
  ABOUTUS_GETDATA_SUCCESS,
  CONTACTS_GETDATA_REQUEST,
  CONTACTS_GETDATA_SUCCESS
} from '../constants';

export const aboutUsFormRequest = data => ({
  type: ABOUTUS_FORM_REQUEST,
  payload: data,
});

export const aboutUsFormSuccess = data => ({
  type: ABOUTUS_FORM_ABOUTUS_SUCCESS,
  payload: data,
});

export const aboutUsWarningMessage = data => ({
  type: ABOUTUS_WARNING_MESSAGE,
  payload: data,
});

export const showErrorMessage = data => ({
  type: ABOUTUS_ACTION_FAILURE,
  payload: data,
});

export const closeErrorMessage = () => ({
  type: ABOUTUS_CLOSE_ACTION_FAILURE,
});

export const aboutUsGetData = () => ({
  type: ABOUTUS_GETDATA_REQUEST,
});

export const aboutUsGetDataEnd = data => ({
  type: ABOUTUS_GETDATA_SUCCESS,
  payload: data,
});

export const constantsGetData = () => ({
  type: CONTACTS_GETDATA_REQUEST,
});

export const constantsGetDataEnd = data => ({
  type: CONTACTS_GETDATA_SUCCESS,
  payload: data,
});
