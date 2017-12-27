import {
  FORM_REQUEST,
  FORM_UCCESS,
  ACTION_FAILURE,
  PAGE_ABOUTUS_REQUEST,
  PAGE_ABOUTUS_SUCCESS,
  NAME_WARNING,
  PATRONYMIC_WARNING,
  SURNAME_WARNING,
  CONTRAINDICATIONS_WARNING
} from '../constants';

export const formReguest = data => ({
    type: FORM_REQUEST,
    payload: data
});

export const formSuccess = data => ({
    type: FORM_SUCCESS,
    payload: data
});

export const validationNameWarning = data => ({
    type: NAME_WARNING,
    payload: data
});

export const validationPatronymicWarning = data => ({
    type: PATRONYMIC_WARNING,
    payload: data
});

export const validationSurnameWarning = data => ({
    type: SURNAME_WARNING,
    payload: data
});

export const validationContraindicationsWarning = data => ({
    type: CONTRAINDICATIONS_WARNING,
    payload: data
});

// export const sendFullName = data => ({//////////
//     type: actions.SEND_FULLNAME,
//     payload: data
// });
//
// export const sendContradications = data => ({
//     type: actions.SEND_CONTRAINDICATIONS,
//     payload: data
// });



// export const sendDataError = data => ({
//     type: actions.SEND_DATA_ERROR,
//     payload: data
// });
//
// export const givePersonalData = () => ({///////
//     type: actions.GIVE_PERSONAL_DATA
// });

// import * as actions from '../constants';


// //Actions FullName form
// export const sendFullNameData = data => ({
//     type: FORM_FULLNAME_REQUEST,
//     payload: data
// });

// export const giveFullNameData = data => ({
//     type: FORM_FULLNAME_SUCCESS,
//     payload: data
// });

// //Actions Sizes form
// export const sendSizesData = data => ({
//     type: FORM_SIZES_REQUEST,
//     payload: data
// });

// export const giveSizesData = data => ({
//     type: FORM_SIZES_SUCCESS,
//     payload: data
// });

// //Actions Aims form
// export const sendAimsData = data => ({
//     type: FORM_AIMS_SUCCESS,
//     payload: data
// });

// export const giveAimsData = data => ({
//     type: FORM_AIMS_REQUEST,
//     payload: data
// });

// //Actions contraindications form
// export const sendСontraData = data => ({
//     type: FORM_CONTRA_REQUEST,
//     payload: data
// });

// export const giveСontraData = data => ({
//     type: FORM_CONTRA_SUCCESS,
//     payload: data
// });

//Actions page loading
export const pageLoading = data => ({
    type: PAGE_ABOUTUS_REQUEST,
    payload: data
});

export const pageLoadingEnd = data => ({
    type: PAGE_ABOUTUS_SUCCESS,
    payload: data
});

// //Action ERROR
// export const pageLoading = data => ({
//     type: ACTION_FAILURE,
//     payload: data //message error
// });
