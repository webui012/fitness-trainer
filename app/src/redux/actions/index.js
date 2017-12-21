import actions from '../constants';

export const sendFullName = (data) => ({
    type: actions.SEND_FULLNAME,
    payload: data
});

export const sendContradications = (data) => ({
    type: actions.SEND_CONTRAINDICATIONS,
    payload: data
});

export const waitSendData = () => ({
    type: actions.WAIT_SEND_DATA
});

export const deleteWaitSendData = () => ({
    type: actions.DELETE_WAIT_SEND_DATA
});

export const sendDataError = (data) => ({
    type: actions.SEND_DATA_ERROR,
    payload: data
});

export const givePersonalData = () => ({
    type: actions.GIVE_PERSONAL_DATA
});
