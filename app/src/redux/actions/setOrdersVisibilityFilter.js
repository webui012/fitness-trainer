import { SET_VISIBILITY_FILTER,
    SORT_BY_PRICE,
    SORT_BY_ID,
    SHOW_ALL_STATUS,
    SHOW_PAYED,
    SHOW_PAID,
    SHOW_UNPAID,
    SHOW_UNPAYED,
    SHOW_ALL_SERVICES,
    SHOW_ONLINE_SERVICE,
    SHOW_NUTRITION_SERVICE,
    SHOW_PROGRAM_SERVICE,
    SHOW_CLOTHES_SERVICE} from '../constants';

export const setOrdersVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const setSortByPrice = (filter) => ({
    type: SORT_BY_PRICE,
    filter
});

export const setSortById = (filter) => ({
    type: SORT_BY_ID,
    filter
});

export const setShowAllStatus = (filter) => ({
    type: SHOW_ALL_STATUS,
    filter
});

export const setShowPayed = (filter) => ({
    type: SHOW_PAYED,
    filter
});

export const setShowPaid = (filter) => ({
    type: SHOW_PAID,
    filter
});

export const setShowUnpaid = (filter) => ({
    type: SHOW_UNPAID,
    filter
});

export const setShowUnpayed = (filter) => ({
    type: SHOW_UNPAYED,
    filter
});

export const setShowAllServices = (filter) => ({
    type: SHOW_ALL_SERVICES,
    filter
});

export const setShowOnlineService = (filter) => ({
    type: SHOW_ONLINE_SERVICE,
    filter
});

export const setShowProgramService = (filter) => ({
    type: SHOW_PROGRAM_SERVICE,
    filter
});

export const setShowClothesService = (filter) => ({
    type: SHOW_CLOTHES_SERVICE,
    filter
});

export const setShowNutritionService = (filter) => ({
    type: SHOW_NUTRITION_SERVICE,
    filter
});
