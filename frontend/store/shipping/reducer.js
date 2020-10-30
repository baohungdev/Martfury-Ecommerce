import { actionTypes } from './action';

export const initShipping = {
    addressInfo: {},
    shippingMethod: {},
    paymentMethod: {}
};

function reducer(state = initShipping, action) {
    switch (action.type) {
        case actionTypes.SET_SHIPPING_ADDRESS:
            return {
                ...state,
                ...{
                    addressInfo: action.addressInfo,
                }
            };
        case actionTypes.GET_SHIPPING_METHOD_SUCCESS:
            return {
                ...state,
                ...{
                    shippingMethod: action.shippingMethod,
                }
            };
        case actionTypes.SET_SHIPPING_PROCESS_SUCCESS:
            return {
                ...state,
                ...{
                    paymentMethod: action.payload.payment,
                }
            };
        default:
            return state;
    }
}

export default reducer;