const initialState = {
  personalData: null,
  contraindications: null,
  measuredData: null,
  aimsData: null,
  errorMessage: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FORM_REQUEST':
      return { ...state, [action.payload.userId]: 'Данные отправляются...' }

    case 'FORM_SUCCESS':
      return { ...state, [action.payload.userId]: null }

    case 'ACTION_FAILURE':
      return { ...state, [action.payload.userId]: null, errorMessage: true }

    case 'CLOSE_ACTION_FAILURE':
      return { ...state, errorMessage: false }

    default:
      return state;
  }
}
