export const actionTypes = {
    SET_SHIPPING_ADDRESS: 'SET_SHIPPING_ADDRESS',
    GET_SHIPPING_METHOD: 'GET_SHIPPING_METHOD',
    GET_SHIPPING_METHOD_SUCCESS: 'GET_SHIPPING_METHOD_SUCCESS',
    SET_SHIPPING_PROCESS: 'SET_SHIPPING_PROCESS',
    SET_SHIPPING_PROCESS_SUCCESS: 'SET_SHIPPING_PROCESS_SUCCESS',
};

export function getShippingMethod() {
    return { type: actionTypes.GET_SHIPPING_METHOD };
}

export function getShippingMethodSuccess(payload) {
    const { shippingMethod } = payload
    return { type: actionTypes.GET_SHIPPING_METHOD_SUCCESS, shippingMethod };
}

export function setShippingAddress(payload) {
    const { addressInfo } = payload
    return { type: actionTypes.SET_SHIPPING_ADDRESS, addressInfo };
}

export function setShippingProcess(payload) {
    return { type: actionTypes.SET_SHIPPING_PROCESS, payload };
}

export function setShippingProcessSuccess(payload) {
    return { type: actionTypes.SET_SHIPPING_PROCESS_SUCCESS, payload };
}
