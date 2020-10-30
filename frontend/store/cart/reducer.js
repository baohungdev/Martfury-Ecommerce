import { actionTypes } from './action';

export const initCart = {
    cartItems: [],
    amount: 0,
    cartTotal: 0,
};

function reducer(state = initCart, action) { 
    switch (action.type) { 
        case actionTypes.GET_CART_SUCCESS:
            return {
                ...state,
            };
        case actionTypes.GET_CART_SUCCESS_DB:
            return {
                ...state,
                ...{ cartItems: action.cart.cartItems },
                ...{ amount: action.cart.amount },
                ...{ cartTotal: action.cart.cartTotal },
            };
        case actionTypes.UPDATE_CART_SUCCESS:
            return {
                ...state,
                ...{ cartItems: action.payload.cartItems },
                ...{ amount: action.payload.amount },
                ...{ cartTotal: action.payload.cartTotal },
            };
        case actionTypes.CLEAR_CART_SUCCESS:
            return {
                ...state,
                ...{ cartItems: action.payload.cartItems },
                ...{ amount: action.payload.amount },
                ...{ cartTotal: action.payload.cartTotal },
            };
        case actionTypes.GET_CART_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        case actionTypes.GET_CART_ERROR_DB:
            return {
                ...state,
                ...{ error: action.error },
            };
        case actionTypes.UPDATE_CART_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        default:
            return state;
    }
}

export default reducer;
