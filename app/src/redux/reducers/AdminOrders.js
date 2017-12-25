import ActionTypes from '../constants';

const initialState = [
  {
    id: 487,
    date: '21.08.2017',
    status: 'Оплачен',
    customer: 'Игорь Курченко',
    services: ['Правильное питание', 'Тренировка 1х1']
  },
  {
    id: 391,
    date: '21.08.2017',
    status: 'Ожидает оплаты',
    customer: 'Денис Слущенко',
    services: ['Правильное питание', 'Тренировка 1х1']
  },
  {
    id: 851,
    date: '19.08.2011',
    status: 'Оплачен',
    customer: 'Андрей Хлебников',
    services: ['Правильное питание', 'Тренировка 1х1']
  },
  {
    id: 298,
    date: '01.02.2016',
    status: 'Оплачен',
    customer: 'Никита Лебединский',
    services: ['Правильное питание', 'Тренировка 1х1']
  },
]

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
export function getAllOrders(state) {
  return state.AdminOrders
}

export default AdminOrders
