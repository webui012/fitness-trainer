import { ALL } from '../constants';

const initialState ={
	userRole: ALL
};

export default function usersStoreReducer( state = initialState, action){
	switch (action.type){
		case 'ADD_USER':
		return {
				...state,
				[action.value.username]: action.value
        //userRole: [ action.value.username ].currentUserRole
			}

		case 'SEARCH_USER':
      for(let key in state){
        if (action.value.login === state[key].username ||
          action.value.login === state[key].email
          && action.value.password === state[key].password1) {
            return {
              ...state,
              [key]:{ ...state[key], signIn: true },
              userRole: state[key].currentUserRole
            }
          }
      }

    case 'USER_LOGOFF':
      for(let key in state){
      	if (state[key].signIn){
      		return {
      			...state,
      			[key]:{ ...state[key], signIn: false },
      			userRole: ALL
      		}
      	}
      }

    default: return state;
  }
}
