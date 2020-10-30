import { actionTypes } from './action';

export const initState = {
    orderlistItems: [],
    orderDetails: []
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
        case actionTypes.SET_ORDER_INFO_SUCCESS:
            return {
                ...state,
                ...{
                    orderlistItems: action.data.orderlistItems,
                    orderDetails: action.data.orderDetails,
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
