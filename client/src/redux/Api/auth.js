import axios from 'axios';

const path = 'http://localhost:8080/api/'

export const login = data =>
  axios.post(path + 'auth/login', { data }).then(res => res.data.user)

export const logout = () =>
  axios.post(path + 'auth/logout').then(res => res.data)

export const signup = data => {
  axios.post(path + 'users/signup', { data }).then(res => res.data.user)
}
