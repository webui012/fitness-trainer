const init = {
    loading: false,
    data: null
};

export default (state = init, action) => {
    switch (action.type) {
        case 'PAGE_CONTACTS_REQUEST':
            return { ...state, loading: true }

        case 'PAGE_CONTACTS_SUCCESS':
            return { ...state, loading: false, data: action.payload }

        default:
            return state;
    }
}