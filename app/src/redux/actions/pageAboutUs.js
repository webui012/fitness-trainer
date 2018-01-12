import {
    PAGE_ABOUTUS_WARNING_MESSAGE,
    ABOUTUS_FORM_REQUEST,
    ABOUTUS_FORM_ABOUTUS_SUCCESS,
    ABOUTUS_ACTION_FAILURE,
    ABOUTUS_CLOSE_ACTION_FAILURE,
    PAGE_ABOUTUS_GETDATA_REQUEST,
    PAGE_ABOUTUS_GETDATA_SUCCESS,
    PAGE_CONTACTS_GETDATA_REQUEST,
    PAGE_CONTACTS_GETDATA_SUCCESS
} from '../constants';

export const aboutUsFormReguest = data => ({
    type: ABOUTUS_FORM_REQUEST,
    payload: data
});

export const aboutUsFormSuccess = data => ({
    type: ABOUTUS_FORM_ABOUTUS_SUCCESS,
    payload: data
});

export const aboutUsWarningMessage = data => ({
    type: PAGE_ABOUTUS_WARNING_MESSAGE,
    payload: data
});

export const showErrorMessage = data => ({
    type: ABOUTUS_ACTION_FAILURE,
    payload: data
});

export const closeErrorMessage = () => ({
    type: ABOUTUS_CLOSE_ACTION_FAILURE
});


export const aboutUsGetData = () => ({
    type: PAGE_ABOUTUS_GETDATA_REQUEST,
});

export const aboutUsGetDataEnd = data => ({
    type: PAGE_ABOUTUS_GETDATA_SUCCESS,
    payload: data
});

export const constantsGetData = () => ({
    type: PAGE_CONTACTS_GETDATA_REQUEST,
});

export const constantsGetDataEnd = data => ({
    type: PAGE_CONTACTS_GETDATA_SUCCESS,
    payload: data
});

