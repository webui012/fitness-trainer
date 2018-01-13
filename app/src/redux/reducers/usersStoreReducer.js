import { ALL } from '../constants';

const getCachedData = localStorage.getItem("cachedData");
if (!getCachedData){
  localStorage.setItem("cachedData", JSON.stringify({ userRole: ALL }));
}

const initialState = JSON.parse(getCachedData);

export default function usersStoreReducer(state = initialState, action){
	switch (action.type){
		case 'ADD_USER':
		  localStorage.setItem("cachedData", JSON.stringify(
        {
          [action.value.username]: action.value,
          userRole: action.value.currentUserRole
        })
      );
    return {
				...state,
				[action.value.username]: action.value,
        userRole: action.value.currentUserRole
			}

		case 'SEARCH_USER':
      for(let key in state){
        if (action.value.login === state[key].username ||
          action.value.login === state[key].email
          && action.value.password === state[key].password1) {
            localStorage.setItem("cachedData", JSON.stringify(
              {
                [key]:{ ...state[key], signIn: true },
                userRole: state[key].currentUserRole
              })
            );
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
      		localStorage.setItem("cachedData", JSON.stringify(
            {
              [key]:{ ...state[key], signIn: false },
            userRole: ALL
            })
          );
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
