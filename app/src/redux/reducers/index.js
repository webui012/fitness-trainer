import { combineReducers } from 'redux';
import AdminOrders from './AdminOrders';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  AdminOrders,
  visibilityFilter
})

export default rootReducer
