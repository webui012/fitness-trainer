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
                    action: 'SHOW_PAYED'
                },
                {
                    value: 'Ожидает оплаты',
                    action: 'SHOW_UNPAYED'
                },
            ]
        },
        {
            type: 'Тип услуги',
            options: [
                {
                    value: 'Все',
                    action: 'SHOW_ALL_SERVICES'
                },
                {
                    value: 'Онлайн тренировка',
                    action: 'SHOW_ONLINE_SERVICE'
                },
                {
                    value: 'Правильное питание',
                    action: 'SHOW_NUTRITION_SERVICE'
                },
                {
                    value: 'Программа тренировок',
                    action: 'SHOW_PROGRAM_SERVICE'
                },
                {
                    value: 'Одежда для фитнесса',
                    action: 'SHOW_CLOTHES_SERVICE'
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
            service: 'Правильное питание'
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
            service: 'Одежда для фитнесса'
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

const getOrdersVisibilityFilter = state => state.ordersVisibilityFilter;

export const getVisibleOrders = createSelector(
  [ getOrdersVisibilityFilter, getUserOrders ],
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

      case 'SHOW_ALL_SERVICES':
        return orders;

      case 'SHOW_ONLINE_SERVICE':
          return orders.filter(o => o.service === 'Тренировка 1х1');

      case 'SHOW_NUTRITION_SERVICE':
          return orders.filter(o => o.service === 'Правильное питание');

      case 'SHOW_PROGRAM_SERVICE':
          return orders.filter(o => o.service === 'Программа тренировок');

      case 'SHOW_CLOTHES_SERVICE':
          return orders.filter(o => o.service === 'Одежда для фитнесса');

      default:
        return orders
    }
  }
);

export default userOrders
