import {
  USER_LOGIN,
  LOGIN_SUCCEEDED,
  USER_SIGNUP,
  SIGNUP_SUCCEEDED,
  USER_LOGOUT,
  LOGOUT_SUCCEEDED
} from '../constants';

const initialState = {
  user: {},
  isLoading: false
}

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_SIGNUP:
    case USER_LOGIN:
    case USER_LOGOUT:
      return { ...state, isLoading: action.isLoading }

    case SIGNUP_SUCCEEDED:
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        user: action.user,
        isLoading: action.isLoading
      }

    case LOGOUT_SUCCEEDED:
      return {
        ...state,
        user: {},
        isLoading: action.isLoading
      }

    default:
      return state;
  }
}

export const getLoadingStatus = state => state.auth.isLoading
export const getAuthenticationStatus = state => !!state.auth.user.token
export const getAdminStatus = state => state.auth.user.isAdmin

export default auth;
