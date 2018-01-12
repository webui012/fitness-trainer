export * from './sales';
export * from './setOrdersVisibilityFilter';
export * from './pageAboutUs';

//action creater for user/admin role layout
export function userLogin(role) {

    return {
        type: 'USER_LOGIN',
        payload: role
    }
}