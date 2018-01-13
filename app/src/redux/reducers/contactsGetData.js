import {
  PAGE_CONTACTS_GETDATA_REQUEST,
  PAGE_CONTACTS_GETDATA_SUCCESS
} from '../constants';

const initialState = {
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_CONTACTS_GETDATA_SUCCESS:
      return { ...state, data: action.payload }

    default:
      return state;
  }
}
