import { USER_LOGIN, USER_LOGOUT, USER_SIGNUP } from '../constants';

export const userLogin = data => ({
  type: USER_LOGIN,
  isLoading: true,
  data
})

export const userLogout = () => ({
  type: USER_LOGOUT,
  isLoading: true,
})

export const userSignUp = data => ({
  type: USER_SIGNUP,
  isLoading: true,
  data
})
