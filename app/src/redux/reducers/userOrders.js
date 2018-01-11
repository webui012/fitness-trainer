import { createSelector } from 'reselect'

const initialState = {
    selections: [
        {
            "type": "Сортировка",
            "options": [
                {
                    "value": "По цене",
                    "action": "SORT_BY_PRICE"
                },
                {
                    "value": "По id",
                    "action": "SORT_BY_ID"
                },
            ]
        },

        {
            "type": "Статус",
            "options": [
                {
                    "value": "Все",
                    "action": "SHOW_ALL_STATUS"
                },
                {
                    "value": "Оплачен",
                    "action": "SHOW_PAYED"
                },
                {
                    "value": "Ожидает оплаты",
                    "action": "SHOW_UNPAYED"
                },
            ]
        }
    ],

    orders: [
        {
            id: 3,
            date: '21.08.2017',
            price: 200,
            payment: 'Privat 24',
            status: 'Оплачен',
            service: ['Правильное питание']
        },
        {
            id: 1,
            date: '21.08.2017',
            price: 300,
            payment: 'Privat 24',
            status: 'Ожидает оплаты',
            service: 'Тренировка 1х1'
        },
        {
            id: 2,
            date: '19.08.2011',
            price: 50,
            payment: 'Privat 24',
            status: 'Ожидает оплаты',
            service: 'Программа тренировок'
        },
        {
            id: 4,
            date: '01.02.2016',
            price: 100,
            payment: 'Privat 24',
            status: 'Оплачен',
            service: 'Правильное питание'
        },
    ]
};

const userOrders = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
};

const getUserOrders = state => state.userOrders.orders;
export const getUserSelections = state => state.userOrders.selections;

export const getVisibleOrders = createSelector(
  [getOrdersVisibilityFilter, getUserOrders],
  (ordersVisibilityFilter, orders) => {
    switch (ordersVisibilityFilter) {
      case 'SORT_BY_ID':
        return [...orders.sort( (a, b) => a.id - b.id)];
      break;

      case 'SORT_BY_PRICE':
        return [...orders.sort( (a, b) => a.price - b.price)];
      break;

      case 'SHOW_PAYED':
        return orders.filter(o => o.status === 'Оплачен');
      break;

      case 'SHOW_UNPAYED':
        return orders.filter(o => o.status === 'Ожидает оплаты');
      break;

      default:
        return orders
    }
  }
);

export default userOrders