import { combineReducers } from 'redux';
import usersStoreReducer from './usersStoreReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
	usersStoreReducer,
	form: formReducer
})

export default rootReducer