import axios from 'axios'

const path = 'http://localhost:8080/api/home'

export const fetchHomepage = () =>
  axios.get(path).then(res => res.data)
