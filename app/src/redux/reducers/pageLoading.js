const init = {
    loading: false,
    data: null,
    error: null
};

export default (state = init, action) => {
    switch (action.type) {
        case 'PAGE_ABOUTUS_REQUEST':
            return { ...state, loading: true }

        case 'PAGE_ABOUTUS_SUCCESS':
            console.log('d',action.payload);
            return { ...state, loading: false, data: action.payload }

        default:
            return state;
    }
}