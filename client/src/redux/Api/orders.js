import axios from 'axios'

const path = 'http://localhost:8080/api/admin/orders'

export const fetchOrders = () =>
  axios.get(path).then(res => res.data)
