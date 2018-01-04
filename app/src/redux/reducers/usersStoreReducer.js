const initialState ={};

 export default function usersStoreReducer( state = initialState, action){
	switch (action.type){
		case 'ADD_USER':
		return {
				...state,
				[action.value.username]: action.value
			}

		case 'SEARCH_USER':
			for( let key in state){
				if (action.value.login == state[key].username ||
					 action.value.login == state[key].email
					 && action.value.password == state[key].password1) {
					alert('Welcome' + ' ' + key);
				}
			}
		
		default: return state;
	}
}