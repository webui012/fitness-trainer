export default (spinner = null, action) => {
    switch (action.type) {
        case 'WAIT_PAGE':
            return 'Ожидайте, пожалуйста, акции загружаются...';
        case 'DELETE_WAIT_PAGE':
            return null;
        default:
            return spinner;
    }
}
