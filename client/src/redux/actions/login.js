import { ADD_USER, SEARCH_USER, USER_LOGOFF, ERROR_REDIRECT, SIGNIN_SAVE_DATA_REQUEST, LOGIN_SEARCH_DATA_REQUEST} from '../constants';

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

export const signUpRequest = value => ({
  type: SIGNIN_SAVE_DATA_REQUEST,
  payload: value,
});

export const logInRequest = value => ({
  type: LOGIN_SEARCH_DATA_REQUEST,
  payload: value,
});