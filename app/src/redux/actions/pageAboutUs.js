import {
    // FORM_REQUEST,
    // FORM_UCCESS,
    // ACTION_FAILURE,
    // CLOSE_ACTION_FAILURE,
    // PAGE_ABOUTUS_REQUEST,
    // PAGE_ABOUTUS_SUCCESS,
    // PAGE_CONTACTS_REQUEST,
    // PAGE_CONTACTS_SUCCESS,
    // WARNING_MESSAGE
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

export const formReguest = data => ({
    type: ABOUTUS_FORM_REQUEST,
    payload: data
});

export const formSuccess = data => ({
    type: PAGE_ABOUTUS_WARNING_MESSAGE,
    payload: data
});

export const warningMessage = data => ({
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


export const pageLoading = () => ({
    type: PAGE_ABOUTUS_GETDATA_REQUEST,
});

export const pageLoadingEnd = data => ({
    type: PAGE_ABOUTUS_GETDATA_SUCCESS,
    payload: data
});

export const pageLoadingContacts = () => ({
    type: PAGE_CONTACTS_GETDATA_REQUEST,
});

export const pageLoadingEndContacts = data => ({
    type: PAGE_CONTACTS_GETDATA_SUCCESS,
    payload: data
});

