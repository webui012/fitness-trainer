import { combineReducers } from 'redux';
import {orderForm} from './serviceOrderForm';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  orderForm,
  form: formReducer
})

export default rootReducer;