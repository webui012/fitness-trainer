import { ADD_USER, SEARCH_USER, USER_LOGOFF, ERROR_REDIRECT } from '../constants';

export const addUser = value => ({
  type: ADD_USER,
  value: value,
});

export const searchUser = value => ({
  type: SEARCH_USER,
  value: value,
})

export const userLogoff = role => ({
  type: USER_LOGOFF,
  payload: role,
});

export const errorRedirect = () => ({
  type: USER_LOGOFF,
})
