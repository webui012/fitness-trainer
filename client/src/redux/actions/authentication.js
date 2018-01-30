import {
  AUTHENTICATION_GETDATA_REQUEST,
  AUTHENTICATION_SET_FETCHED_ROLE,
  AUTHENTICATION_SET_DEFAULT_ROLE
   } from '../constants';

export const authenticationGetDataRequest = () => ({
  type: AUTHENTICATION_GETDATA_REQUEST,
});

export const authenticationSetFetchedRole = userRole => ({
  type: AUTHENTICATION_SET_FETCHED_ROLE,
  payload: userRole
});

export const authenticationSetDefaultRole = () => ({
  type: AUTHENTICATION_SET_DEFAULT_ROLE,
});
