import { createSelector } from 'reselect'
import { ORDERS_REQUEST, ORDERS_SUCCEEDED, ORDERS_FAILED } from '../constants';

const initialState = {
  isLoading: false,
  orders: []
}

const orders = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS_REQUEST:
      return { ...state, isLoading: action.isLoading }

    case ORDERS_SUCCEEDED:
      return {
        ...state,
        isLoading: action.isLoading,
        orders: action.orders
      }

    default:
      return state
  }
};

const getOrders = state => state.orders.orders;
export const getLoadingStatus = state => state.orders.isLoading;

const getOrdersVisibilityFilter = state => state.ordersVisibilityFilter;

export const getAdminSelections = state => state.orders.selections;

export const getVisibleOrders = createSelector(
  [ getOrdersVisibilityFilter, getOrders ],
  (ordersVisibilityFilter, orders) => {
    switch (ordersVisibilityFilter) {
      case 'SORT_BY_ID':
        return [ ...orders.sort( (a, b) => a.id - b.id) ];

      case 'SORT_BY_PRICE':
        return [ ...orders.sort( (a, b) => a.price - b.price) ];

      case 'SHOW_PAID':
        return orders.filter(o => o.status === 'Оплачен');

      case 'SHOW_UNPAID':
        return orders.filter(o => o.status === 'Ожидает оплаты');

      default:
        return orders
    }
  }
);

export default orders
