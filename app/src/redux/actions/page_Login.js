import { ADD_USER, SEARCH_USER, USER_LOGOFF } from './constants';

export function addUser(value) {
  return {
    type: ADD_USER,
    value: value
  }
}

export function searchUser(value) {
  return {
    type: SEARCH_USER,
    value: value
  }
}

export function userLogoff(role){

  return {
    type: USER_LOGOFF,
    payload: role
  }
}
