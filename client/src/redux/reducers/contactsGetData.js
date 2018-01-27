import { CONTACTS_GETDATA_SUCCESS } from '../constants';

const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONTACTS_GETDATA_SUCCESS:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};
