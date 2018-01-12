import {
  FORM_REQUEST,
  FORM_UCCESS,
  ACTION_FAILURE,
  CLOSE_ACTION_FAILURE,
  PAGE_ABOUTUS_REQUEST,
  PAGE_ABOUTUS_SUCCESS,
  PAGE_CONTACTS_REQUEST,
  PAGE_CONTACTS_SUCCESS,
  WARNING_MESSAGE
} from '../constants';

export const formReguest = data => ({
  type: FORM_REQUEST,
  payload: data
});

export const formSuccess = data => ({
  type: FORM_SUCCESS,
  payload: data
});

export const warningMessage = data => ({
  type: WARNING_MESSAGE,
  payload: data
});

export const showErrorMessage = data => ({
  type: ACTION_FAILURE,
  payload: data
});

export const closeErrorMessage = () => ({
  type: CLOSE_ACTION_FAILURE
});


export const pageLoading = () => ({
  type: PAGE_ABOUTUS_REQUEST,
});

export const pageLoadingEnd = data => ({
  type: PAGE_ABOUTUS_SUCCESS,
  payload: data
});

export const pageLoadingContacts = () => ({
  type: PAGE_CONTACTS_REQUEST,
});

export const pageLoadingEndContacts = data => ({
  type: PAGE_CONTACTS_SUCCESS,
  payload: data
});

export function userLogin(role){

  return {
    type: 'USER_LOGIN',
    payload: role
  }
}

export * from './sales';
export * from './setOrdersVisibilityFilter';
export * from './serviceOrderForm';

