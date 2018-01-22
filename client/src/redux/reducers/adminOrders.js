import ActionTypes from '../constants';
import { createSelector } from 'reselect'
import { ORDERS_REQUEST, ORDERS_SUCCEEDED, ORDERS_FAILED } from '../constants';

const initialState = {
  isLoading: false,
  data: {}
}

const adminOrders = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS_REQUEST:
      return { ...state, isLoading: action.isLoading }

    case ORDERS_SUCCEEDED:
      return {
        ...state,
        isLoading: action.isLoading,
        data: {
          ...state.data,
          orders: action.orders
        }
      }

    default:
      return state
  }
};

const getAdminOrders = state => state.adminOrders.data.orders;
export const getLoadingStatus = state => state.adminOrders.isLoading;
const getOrdersVisibilityFilter = state => state.ordersVisibilityFilter;

export const getAdminSelections = state => state.adminOrders.selections;

export const getVisibleOrders = createSelector(
  [ getOrdersVisibilityFilter, getAdminOrders ],
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

export default adminOrders
