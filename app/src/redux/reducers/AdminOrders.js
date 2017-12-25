import ActionTypes from '../constants';

const initialState = {
  orders: [
    {
      id: 487,
      date: '21.08.2017',
      price: 200,
      payment: 'Privat 24',
      status: 'Оплачен',
      customer: 'Игорь Курченко',
      service: ['Правильное питание']
    },
    {
      id: 391,
      date: '21.08.2017',
      price: 300,
      payment: 'Privat 24',
      status: 'Ожидает оплаты',
      customer: 'Денис Слущенко',
      service: 'Тренировка 1х1'
    },
    {
      id: 851,
      date: '19.08.2011',
      price: 400,
      payment: 'Privat 24',
      status: 'Ожидает оплаты',
      customer: 'Андрей Хлебников',
      service: 'Программа тренировок'
    },
    {
      id: 298,
      date: '01.02.2016',
      price: 500,
      payment: 'Privat 24',
      status: 'Оплачен',
      customer: 'Никита Лебединский',
      service: 'Правильное питание'
    },
  ]
}

const AdminOrders = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL:
      console.log('Get all from reducer!')
      break;
    default:
      return state
  }
}

// Selector

 export const getAllOrdersSelector = state => state.AdminOrders.orders
// const getPurchasedOrdersSelector = state =>

export default AdminOrders
