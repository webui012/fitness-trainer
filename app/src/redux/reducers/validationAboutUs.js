const initialState = {
  avatar: null,
  name: null,
  patronymic: null,
  surname: null,
  contraindications: null,
  aims: null,
  age: null,
  height: null,
  weight: null,
  neck: null,
  breast: null,
  tail: null,
  hips: null,
  legs: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'WARNING_MESSAGE':
      return Object.assign({}, state, action.payload);
      
    default:
      return state;
  }
}
