import axios from 'axios'

export default () => {
  return axios.get('http://localhost:8080/api/service-order')
    .then(res => res.data)
    .catch(error => console.log('error', error.message));
}
