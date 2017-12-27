let initialState = {
  name: null,
  patronymic: null,
  surname: null,
  contraindications: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NAME_WARNING':
      return Object.assign({}, state, {name: action.payload})

    case 'PATRONYMIC_WARNING':
      return Object.assign({}, state, {patronymic: action.payload})

    case 'SURNAME_WARNING':
      return Object.assign({}, state, {surname: action.payload})

    case 'CONTRAINDICATIONS_WARNING':
      return Object.assign({}, state, {contraindications: action.payload})

    default:
      return state;
  }
}
