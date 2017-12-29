let initialState = {
  name: null,
  patronymic: null,
  surname: null,
  contraindications: null,
  aims: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'WARNING_MESSAGE':
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}
