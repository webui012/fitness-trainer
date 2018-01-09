import ActionTypes from '../constants';

export const waitSalesPage = () => ({
    type: ActionTypes.PAGE_SALES_WAIT
});

export const waitSalesPageEnd = data => ({
    type: ActionTypes.PAGE_SALES_SUCCESS,
    data
});


export const showError = () => ({
    type: ActionTypes.ERROR
});


/*
export const addSales = data => ({
    type: ActionTypes.ADD_SALES
});

export const deleteSales = data => ({
    type: ActionTypes.DELETE_SALES,
    payload: data
});*/
