import axios from 'axios';

const path = 'api/auth'

export const login = data =>
  axios.post(path + '/login', { data }).then(res => res.data.user)

export const logout = () =>
  axios.post(path + '/logout').then(res => res.data)

export const signup = data => {
  axios.post('api/users/signup', { data }).then(res => res.data.user)
}
