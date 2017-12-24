const initialState ={};

 export default function usersStoreReducer( state = initialState, action){
	switch (action.type){
		case 'ADD_USER':
		return {
				...state
			}
		default: return state;
	}
}