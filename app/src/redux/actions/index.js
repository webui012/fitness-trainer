import ActionTypes from '../constants';

export const waitPage = () => ({
    type: ActionTypes.WAIT_PAGE
});

export const deleteWaitSendData = () => ({
    type: ActionTypes.DELETE_WAIT_PAGE
});


export const addSales = data => ({
    type: ActionTypes.ADD_SALES
});

export const deleteSales = data => ({
    type: ActionTypes.DELETE_SALES,
    payload: data
});