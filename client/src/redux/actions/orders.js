import { ORDERS_REQUEST } from '../constants';

export const fetchOrders = () => ({
  type: ORDERS_REQUEST,
  isLoading: true,
});
