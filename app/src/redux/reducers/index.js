import { combineReducers } from 'redux';
import UserOrder from './UserOrder';
import visibilityFilter from './visibilityFilter';
const rootReducer = combineReducers({
    UserOrder,
    visibilityFilter
})

export default rootReducer