import { all, put, takeEvery, call, select } from 'redux-saga/effects';
import axios from 'axios';
import Router from 'next/router';
import { endpoints } from '../../apis';
import { notification } from 'antd';
import {
    actionTypes,
    getOrderlistListSuccess,
    updateOrderlistListSuccess,
    setOrderInfoSuccess
} from './action';

import {
    getAuth,
    getCart
} from '../selectors'

const server = process.env.server;

const modalSuccess = type => {
    notification[type]({
        message: 'Added to orderlisht!',
        description: 'This order has been added to orderlist!',
    });
};

const modalWarning = type => {
    notification[type]({
        message: 'Removed from orderlist',
        description: 'This order has been removed from orderlist!',
    });
};

function makeid(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

function* getOrderlistListSaga() {
    const auth = yield select(getAuth)
    if(auth && auth.isLoggedIn) {
        try {
            const res = yield call(axios.post, server + endpoints.GETORDERLIST, auth);
            yield put(getOrderlistListSuccess(res.data));
        } catch (err) {
            console.log(err);
        }
    }else{
        try {
            const localOrder = JSON.parse(localStorage.getItem('persist:martfury')).order;
            let currentOrder = JSON.parse(localOrder);
            yield put(setOrderInfoSuccess(currentOrder));
        } catch (err) {
            console.log(err);
        }
    }
    
}

function* setOrderInfoSaga(payload) {
    const { cart, payment, shipping } = payload.data
    const orderId = 'id_' + makeid(10)
    const order = {
        OrderID: orderId,
        OrderNumber: makeid(10),
        OrderDate: Date.now(),
        TransactStatus: 'Pending',
        Paid: true,
        createAt: Date.now(),
        updateAt: Date.now(),
    }
    const orderDetail = {
        id: orderId,
        shipping,
        payment,
        cart
    }

    let currentOrder = JSON.parse(
        JSON.parse(localStorage.getItem('persist:martfury')).order
    );

    currentOrder.orderlistItems.push(order)
    currentOrder.orderDetails.push(orderDetail)
    yield put(setOrderInfoSuccess({
        ...currentOrder
    }));

}

function* addItemToOrderlistSaga(payload) {
    try {
        const { product } = payload;
        let localOrderlist = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).orderlist
        );

        let existItem = localOrderlist.orderlistItems.find(
            item => item.id === product.id
        );

        if (!existItem) {
            localOrderlist.orderlistItems.push(product);
            yield put(updateOrderlistListSuccess(localOrderlist));
            modalSuccess('success');
        }
    } catch (err) {
        console.log(err);
    }
}

function* removeItemOrderlistSaga(payload) {
    try {
        const { product } = payload;
        let localOrderlist = JSON.parse(
            JSON.parse(localStorage.getItem('persist:martfury')).orderlist
        );
        let index = localOrderlist.orderlistItems.indexOf(product);
        localOrderlist.orderlistItems.splice(index, 1);
        yield put(updateOrderlistListSuccess(localOrderlist));
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

function* clearOrderlistListSaga() {
    try {
        const emptyCart = {
            orderlistItems: []
        };
        yield put(updateOrderlistListSuccess(emptyCart));
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_ORDERLIST_LIST, getOrderlistListSaga)]);
    yield all([takeEvery(actionTypes.ADD_ITEM_ORDERLISH, addItemToOrderlistSaga)]);
    yield all([takeEvery(actionTypes.REMOVE_ITEM_ORDERLISH, removeItemOrderlistSaga)]);
    yield all([takeEvery(actionTypes.SET_ORDER_INFO, setOrderInfoSaga)]);
}
