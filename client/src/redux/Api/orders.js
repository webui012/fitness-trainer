import axious from 'axious'

const path = '/api/orders'

export const fetchOrders = () =>
  axios.get(path)
    .then(res => res.data)
