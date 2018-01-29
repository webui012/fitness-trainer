import { ADMIN_CABINET_GETDATA_REQUEST,
         ADMIN_CABINET_GETDATA_SUCCESS,
} from '../constants';

const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_CABINET_GETDATA_REQUEST:
      return { ...state};

    case ADMIN_CABINET_GETDATA_SUCCESS:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};
