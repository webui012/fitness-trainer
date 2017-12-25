export default (spinner = console.log('boommmmmmm'), action) => {
    switch (action.type) {
        case 'PAGE_ABOUTUS_REQUEST':
            return console.log('boom start')

        case 'PAGE_ABOUTUS_SUCCESS':
            return console.log('boom end')
            
        default:
            return spinner;
    }
}