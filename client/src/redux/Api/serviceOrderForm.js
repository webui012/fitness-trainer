import axios from 'axios';

// export const getServiceOrderPage = () => {
//   return fetch('http://localhost:8080/api/service-order', {
//     method: 'GET',
//     headers : {
//       'Content-Type': 'application/json',
//        Accept: 'application/json'
//     }
//   })
//   .then(response => {
//     if (response.status !== 200) {
//       console.log(`Oops, problem. Status Code: ${response.status}`);
//       throw new Error('Bad request');
//     }
//     return response.json();
//   })
//   .catch(error => console.log('error', error.message));
// };

export const getServiceOrderPage = () => {
  return axios.get('http://localhost:8080/api/service-order')
    .then(res => res.data)
};

export const createNewOrder = data => {
  return axios.post('http://localhost:8080/api/orders', { data })
    .then(res => res.data)
};

export const fetchOrders = data => {
  return axios.post('http://localhost:8080/api/orders', { data })
    .then(res => res.data)
};
