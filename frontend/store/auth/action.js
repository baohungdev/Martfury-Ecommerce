export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGIN_OAUTH: 'LOGIN_OAUTH',
    REGISTER_REQUEST: 'REGISTER_REQUEST',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    OAUTH_SUCCESS: 'OAUTH_SUCCESS',
    GET_ACCOUNT_REQUEST: 'GET_ACCOUNT_REQUEST',
    UPDATE_ACCOUNT_REQUEST: 'UPDATE_ACCOUNT_REQUEST',
    SUBMIT_SUCCESS: 'SUBMIT_SUCCESS',
    GET_ADDRESS_REQUEST: 'GET_ADDRESS_REQUEST',
    UPDATE_BILLINGADDRESS_REQUEST: 'UPDATE_BILLINGADDRESS_REQUEST',
    UPDATE_SHIPPINGADDRESS_REQUEST: 'UPDATE_SHIPPINGADDRESS_REQUEST',
    SUCCESS_AUTHORIZATION: 'SUCCESS_AUTHORIZATION',
    FAILED_AUTHORIZATION: 'FAILED_AUTHORIZATION'
};

export function authorizate() { 
    return { type: actionTypes.CHECK_AUTHORIZATION };
}

export function authorizateSuccess(payload) {
    return { type: actionTypes.SUCCESS_AUTHORIZATION, payload };
}

export function authorizateFailed() {
    return { type: actionTypes.FAILED_AUTHORIZATION };
}

export function login(payload) {
    return { type: actionTypes.LOGIN_REQUEST, payload };
}

export function loginSuccess(data) {
    return { type: actionTypes.LOGIN_SUCCESS, data };
}

export function register(payload) {
    return { type: actionTypes.REGISTER_REQUEST, payload };
}

export function registerSuccess() {
    return { type: actionTypes.REGISTER_SUCCESS };
}

export function loginFailed(err) {
    return { type: actionTypes.LOGIN_FAILED, err };
}

export function logOut() {
    return { type: actionTypes.LOGOUT };
}

export function logOutSuccess() {
    return { type: actionTypes.LOGOUT_SUCCESS };
}

export function oauth(target) {
    return { type: actionTypes.LOGIN_OAUTH, target };
}

export function oauthSuccess(target, token) {
    return { type: actionTypes.OAUTH_SUCCESS, target, token };
}

export function getAccount() {
    return { type: actionTypes.GET_ACCOUNT_REQUEST };
}

export function updateAccount(payload) {
    return { type: actionTypes.UPDATE_ACCOUNT_REQUEST, payload };
}

export function submitSuccess(msg, payload) {
    return { type: actionTypes.SUBMIT_SUCCESS, msg, payload };
}

export function getAddress() {
    return { type: actionTypes.GET_ADDRESS_REQUEST };
}

export function updateBillingAddress(payload) {
    return { type: actionTypes.UPDATE_BILLINGADDRESS_REQUEST, payload };
}

export function updateShippingAddress(payload) {
    return { type: actionTypes.UPDATE_SHIPPINGADDRESS_REQUEST, payload };
}
