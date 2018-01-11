import ActionTypes from '../constants';
import { createSelector } from 'reselect';

const initialState = {
    orders: [
        {
            id: 32,
            date: '21.08.2017',
            price: 200,
            payment: 'Privat 24',
            status: 'Оплачен',
            service: ['Правильное питание']
        },
        {
            id: 23,
            date: '21.08.2017',
            price: 300,
            payment: 'Privat 24',
            status: 'Ожидает оплаты',
            service: 'Тренировка 1х1'
        },
        {
            id: 11,
            date: '19.08.2011',
            price: 50,
            payment: 'Privat 24',
            status: 'Ожидает оплаты',
            service: 'Программа тренировок'
        },
        {
            id: 41,
            date: '01.02.2016',
            price: 100,
            payment: 'Privat 24',
            status: 'Оплачен',
            service: 'Правильное питание'
        },
    ]
}

const UserOrder = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// Selector
const getOrders = state => state.UserOrder.orders
const getVisibilityFilter = state => state.visibilityFilter

export const getVisibleOrders = createSelector(
    [getVisibilityFilter, getOrders],
    (visibilityFilter, orders) => {
        switch (visibilityFilter) {
            case 'SORT_BY_ID':
                return [...orders.sort( (a, b) => a.id - b.id)]
                break;
            case 'SORT_BY_PRICE':
                return [...orders.sort( (a, b) => a.price - b.price)]
                break;
            case 'SHOW_PAYED':
                return orders.filter(o => o.status === 'Оплачен')
                break;
            case 'SHOW_UNPAYED':
                return orders.filter(o => o.status === 'Ожидает оплаты')
                break;
            default:
                return orders
        }
    }
)


export default UserOrder
