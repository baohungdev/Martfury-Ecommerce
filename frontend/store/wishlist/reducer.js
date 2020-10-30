import { actionTypes } from './action';

export const initState = {
    wishlistItems: [],
    wishlistTotal: 0,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_WISHLIST_LIST_SUCCESS:
            return {
                ...state,
            };
        case actionTypes.GET_WISHLIST_SUCCESS_DB:
            return {
                ...state,
                ...{ wishlistItems: action.wishlist.wishlistItems },
                ...{ wishlistTotal: action.wishlist.wishlistTotal },
            };
        case actionTypes.UPDATE_WISHLISH_LIST_SUCCESS:
            return {
                ...state,
                ...{
                    wishlistItems: action.payload.wishlistItems,
                    wishlistTotal: action.payload.wishlistTotal,
                },
            };
        case actionTypes.GET_WISHLIST_LIST_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        default:
            return state;
    }
}

export default reducer;
