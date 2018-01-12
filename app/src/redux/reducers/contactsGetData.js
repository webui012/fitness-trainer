import {
    PAGE_CONTACTS_GETDATA_REQUEST,
    PAGE_CONTACTS_GETDATA_SUCCESS
} from '../constants';

const init = {
    data: null
};

export default (state = init, action) => {
    switch (action.type) {
        case PAGE_CONTACTS_GETDATA_REQUEST:
            return { ...state }

        case PAGE_CONTACTS_GETDATA_SUCCESS:
            return { ...state, data: action.payload }

        default:
            return state;
    }
}