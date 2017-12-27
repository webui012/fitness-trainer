export default (loading = true, action) => {
    switch (action.type) {
        case 'PAGE_ABOUTUS_REQUEST':
            return loading

        case 'PAGE_ABOUTUS_SUCCESS':
            return loading = false

        default:
            return loading;
    }
}