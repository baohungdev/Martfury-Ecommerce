import { actionTypes } from './action';

export const initState = {
    orderlistItems: [],
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.GET_ORDERLIST_LIST_SUCCESS:
            return {
                ...state,
                ...{
                    orderlistItems: action.data,
                }
            };
        case actionTypes.UPDATE_ORDERLISH_LIST_SUCCESS:
            return {
                ...state,
                ...{
                    orderlistItems: action.payload.orderlistItems,
                },
            };
        case actionTypes.GET_ORDERLIST_LIST_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        default:
            return state;
    }
}

export default reducer;
