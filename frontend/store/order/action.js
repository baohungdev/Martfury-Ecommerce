export const actionTypes = {
    GET_ORDERLIST_LIST: 'GET_ORDERLIST_LIST',
    GET_ORDERLIST_LIST_SUCCESS: 'GET_ORDERLIST_LIST_SUCCESS',
    SET_ORDER_INFO: 'SET_ORDER_INFO',
    SET_ORDER_INFO_SUCCESS: 'SET_ORDER_INFO_SUCCESS',
    GET_ORDERLIST_LIST_ERROR: 'GET_ORDERLIST_LIST_ERROR',

    ADD_ITEM_ORDERLISH: 'ADD_ITEM_ORDERLISH',
    REMOVE_ITEM_ORDERLISH: 'REMOVE_ITEM_ORDERLISH',

    UPDATE_ORDERLISH_LIST: 'UPDATE_ORDERLISH_LIST',
    UPDATE_ORDERLISH_LIST_SUCCESS: 'UPDATE_ORDERLISH_LIST_SUCCESS',
    UPDATE_ORDERLISH_LIST_ERROR: 'UPDATE_ORDERLISH_LIST_ERROR',

    CLEAR_ORDERLISH_LIST: 'CLEAR_ORDERLISH_LIST',
};

export function getOrderlistList() {
    return { type: actionTypes.GET_ORDERLIST_LIST };
}

export function getOrderlistListSuccess(data) {
    return {
        type: actionTypes.GET_ORDERLIST_LIST_SUCCESS,
        data,
    };
}

export function setOrderInfo(data) {
    return {
        type: actionTypes.SET_ORDER_INFO,
        data,
    };
}

export function setOrderInfoSuccess(data) {
    return {
        type: actionTypes.SET_ORDER_INFO_SUCCESS,
        data,
    };
}

export function addItemToOrderlist(product) {
    return { type: actionTypes.ADD_ITEM_ORDERLISH, product };
}

export function removeorderlistItem(product) {
    return { type: actionTypes.REMOVE_ITEM_ORDERLISH, product };
}

export function clearOrderlist() {
    return { type: actionTypes.CLEAR_CART };
}

export function updateOrderlistListSuccess(payload) {
    return {
        type: actionTypes.UPDATE_ORDERLISH_LIST_SUCCESS,
        payload,
    };
}