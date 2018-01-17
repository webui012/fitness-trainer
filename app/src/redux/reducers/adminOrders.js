import ActionTypes from '../constants';
import { createSelector } from 'reselect'

const initialState = {
  selections: [
    {
      type: 'Сортировка',
      options: [
        {
          value: 'По цене',
          action: 'SORT_BY_PRICE'
        },
        {
          value: 'По id',
          action: 'SORT_BY_ID'
        },
      ]
    },

    {
      type: 'Статус',
      options: [
        {
          value: 'Все',
          action: 'SHOW_ALL_STATUS'
        },
        {
          value: 'Оплачен',
          action: 'SHOW_PAID'
        },
        {
          value: 'Ожидает оплаты',
          action: 'SHOW_UNPAID'
        },
      ]
    }
  ],

  orders: [
    {
      id: 32,
      date: '21.08.2017',
      price: 200,
      payment: 'Privat 24',
      status: 'Оплачен',
      customer: 'Игорь Курченко',
      service: [ 'Правильное питание' ]
    },
    {
      id: 12,
      date: '21.08.2017',
      price: 300,
      payment: 'Privat 24',
      status: 'Ожидает оплаты',
      customer: 'Денис Слущенко',
      service: 'Тренировка 1х1'
    },
    {
      id: 59,
      date: '19.08.2011',
      price: 50,
      payment: 'Privat 24',
      status: 'Ожидает оплаты',
      customer: 'Андрей Хлебников',
      service: 'Программа тренировок'
    },
    {
      id: 432,
      date: '01.02.2016',
      price: 100,
      payment: 'Privat 24',
      status: 'Оплачен',
      customer: 'Никита Лебединский',
      service: 'Правильное питание'
    },
  ]
};

const adminOrders = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

const getAdminOrders = state => state.adminOrders.orders;
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
