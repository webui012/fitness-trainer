export * from './sales';
export * from './setOrdersVisibilityFilter';
export * from './pageAboutUs';
export * from './serviceOrderForm';

//action creater for user/admin role layout
export function userLogin(role) {
    return {
        type: 'USER_LOGIN',
        payload: role
    }
}