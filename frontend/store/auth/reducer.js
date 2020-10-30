import { actionTypes } from './action';

export const initState = {
    isLoggedIn: false,
    loading: true,
    data: {},
    alert: {}
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.SUCCESS_AUTHORIZATION:
            return {
                ...state,
                ...{ isLoggedIn: true, loading: false, data: {...state.data, ...action.payload} },
            };
        case actionTypes.FAILED_AUTHORIZATION:
            return {
                ...state,
                ...{ isLoggedIn: false, loading: false, data: {} },
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: true, alert: {type: 'success', msg: 'You are login successful!', timestamp: Date.now()}, data: action.data },
            };
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                ...{ alert: {type: 'success', msg: 'You are register successful!', timestamp: Date.now()} },
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: false, data: {}, alert: {} },
            };
        case actionTypes.OAUTH_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: true, data: action.data, alert: {type: 'success', msg: action.target + ' login successful!', timestamp: Date.now()} },
            };
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                ...{ alert: {type: 'error', msg: action.err, timestamp: Date.now()} },
            };
        case actionTypes.SUBMIT_SUCCESS:
            return {
                ...state,
                ...{ alert: {type: 'success', msg: action.msg, timestamp: Date.now()}, data: {...state.data, ...{user: {...state.data.user, ...action.payload}}} },
            };
        default:
            return state;
    }
}

export default reducer;
