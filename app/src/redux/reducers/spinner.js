import ActionTypes from '../constants';


const initialState = {
    spinner: false,
    data: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.PAGE_SALES_WAIT:
            return { ...state, spinner: true };

        case ActionTypes.PAGE_SALES_SUCCESS:
            return { ...state, spinner: false, data: action.payload };

        case ActionTypes.ERROR:
            return { ...state, spinner: false, error:false};

        default:
            return state;
    }
}