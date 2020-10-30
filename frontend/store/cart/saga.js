import { all, put, call, takeEvery, select } from 'redux-saga/effects';
import { notification } from 'antd';

import axios from 'axios';
import { endpoints } from '../../apis';

const server = process.env.server;

import {
    actionTypes,
    getCartError,
    getCartSuccess,
    getCartSuccessFromDb,
    getCartErrorFromDb,
    updateCartSuccess,
    updateCartError,
    clearCartSuccess
} from './action';

import {
    getAuth,
    getCart
} from '../selectors'

const modalSuccess = type => {
    notification[type]({
        message: 'Success',
        description: 'This product has been added to your cart!',
        duration: 1,
    });
};
const modalWarning = type => {
    notification[type]({
        message: 'Remove A Item',
        description: 'This product has been removed from your cart!',
        duration: 1,
    });
};

export const calculateAmount = obj =>
    Object.values(obj)
        .reduce((acc, { quantity, price }) => acc + quantity * price, 0)
        .toFixed(2);

function* getCartSaga() { 
    const auth = yield select(getAuth)
    if(auth && auth.isLoggedIn) {
        try {
            let cartItems =[]
            let quantity = 0
            let amount = 0
            let cartTotal = 0
            const res = yield call(axios.post, server + endpoints.GETCART, auth);
            if(res.data.length > 0) {
                cartItems = res.data.map((item) => {
                    cartTotal = cartTotal + item.Quantity
                    return {
                        badge: [],
                        brand: [],
                        categories: [],
                        variants: [],
                        id: item.CartID,
                        price: item.Product ? +item.Product.price : 0,
                        quantity: +item.Quantity,
                        rating: item.Product && +item.Product.rating > 0 ? true : false,
                        ratingCount: item.Product ? +item.Product.rating : 0,
                        sale: false,
                        salePrice: 0,
                        thumbnail: item.Product ? item.Product.img : '',
                        title: item.Product ? item.Product.title : ''
                    }
                })
                amount = calculateAmount(cartItems);
                quantity = cartItems.length
            }
            yield put(getCartSuccessFromDb({
                cartItems,
                quantity,
                amount,
                cartTotal
            }));
        } catch (err) { 
            yield put(getCartErrorFromDb(err));
        }
    }else{
        try {
            yield put(getCartSuccess());
        } catch (err) {
            yield put(getCartError(err));
        }
    }
}

function* addItemSaga(payload) {
    const { product } = payload; 
    const auth = yield select(getAuth)

    if(auth && auth.isLoggedIn) {
        try {
            let currentCart = yield select(getCart)
            let existItem = currentCart.cartItems.find(
                item => item.id === product.id
            );
            if (existItem) {
                existItem.quantity += product.quantity;
            } else {
                if (!product.quantity) {
                    product.quantity = 1;
                }
                currentCart.cartItems.push(product);
            }
            currentCart.amount = calculateAmount(currentCart.cartItems);
            currentCart.cartTotal++;
            
            const res = yield call(axios.post, server + endpoints.ADDCART, { product: product, auth: auth });

            if(!res.data.errors) {
                yield put(updateCartSuccess(currentCart));
                modalSuccess('success');
            }
        } catch (err) {
            yield put(getCartError(err.response && err.response.data || 'Failed'));
        }
    }else{
        try {
            const localCart = JSON.parse(localStorage.getItem('persist:martfury')).cart;
            let currentCart = JSON.parse(localCart);
            let existItem = currentCart.cartItems.find(
                item => item.id === product.id
            );
            if (existItem) {
                existItem.quantity += product.quantity;
            } else {
                if (!product.quantity) {
                    product.quantity = 1;
                }
                currentCart.cartItems.push(product);
            }
            currentCart.amount = calculateAmount(currentCart.cartItems);
            currentCart.cartTotal++;
    
            yield put(updateCartSuccess(currentCart));
            modalSuccess('success');
        } catch (err) {
            yield put(getCartError(err));
        }
    }
}

function* removeItemSaga(payload) {
    const { product } = payload; 
    const auth = yield select(getAuth)

    if(auth && auth.isLoggedIn) {
        try {
            let currentCart = yield select(getCart)
            let index = currentCart.cartItems.indexOf(product);
            const removeItem = { ...currentCart.cartItems[index] }

            currentCart.cartTotal = currentCart.cartTotal - product.quantity;
            currentCart.cartItems.splice(index, 1);
            currentCart.amount = calculateAmount(currentCart.cartItems);

            if (currentCart.cartItems.length === 0) {
                currentCart.cartItems = [];
                currentCart.amount = 0;
                currentCart.cartTotal = 0;
            }

            const res = yield call(axios.post, server + endpoints.REMOVECART, { removeItem: removeItem, auth: auth });
            if(!res.data.errors) {
                yield put(updateCartSuccess(currentCart));
                modalWarning('warning');
            }
        } catch(err) {
            yield put(getCartError(err));
        }
    }else{
        try {
            let localCart = JSON.parse(
                JSON.parse(localStorage.getItem('persist:martfury')).cart
            );
            let index = localCart.cartItems.indexOf(product);
            localCart.cartTotal = localCart.cartTotal - product.quantity;
            localCart.cartItems.splice(index, 1);
            localCart.amount = calculateAmount(localCart.cartItems);
            if (localCart.cartItems.length === 0) {
                localCart.cartItems = [];
                localCart.amount = 0;
                localCart.cartTotal = 0;
            }
            yield put(updateCartSuccess(localCart));
            modalWarning('warning');
        } catch (err) {
            yield put(getCartError(err));
        }
    }
}

function* increaseQtySaga(payload) {
    const { product } = payload; 
    const auth = yield select(getAuth)

    if(auth && auth.isLoggedIn) {
        try {
            let currentCart = yield select(getCart)
            let selectedItem = currentCart.cartItems.find(
                item => item.id === product.id
            );
            if (selectedItem) {
                selectedItem.quantity++;
                currentCart.cartTotal++;
                currentCart.amount = calculateAmount(currentCart.cartItems);
            }

            const res = yield call(axios.post, server + endpoints.INCREASEQUANTITY, { selectedItem: selectedItem, auth: auth });
            if(!res.data.errors) {
                yield put(updateCartSuccess(currentCart));
            }
        } catch (err) {
            yield put(getCartError(err));
        }
    }else{
        try {
            let localCart = JSON.parse(
                JSON.parse(localStorage.getItem('persist:martfury')).cart
            );
            let selectedItem = localCart.cartItems.find(
                item => item.id === product.id
            );
            if (selectedItem) {
                selectedItem.quantity++;
                localCart.cartTotal++;
                localCart.amount = calculateAmount(localCart.cartItems);
            }
            yield put(updateCartSuccess(localCart));
        } catch (err) {
            yield put(getCartError(err));
        }
    }
}

function* decreaseItemQtySaga(payload) {
    const { product } = payload; 
    const auth = yield select(getAuth)

    if(auth && auth.isLoggedIn) {
        try {
            let currentCart = yield select(getCart)
            let selectedItem = currentCart.cartItems.find(
                item => item.id === product.id
            );
            
            if (selectedItem) {
                selectedItem.quantity--;
                currentCart.cartTotal--;
                currentCart.amount = calculateAmount(currentCart.cartItems);
            }

            const res = yield call(axios.post, server + endpoints.DECREASEQUANTITY, { selectedItem: selectedItem, auth: auth });
            if(!res.data.errors) {
                yield put(updateCartSuccess(currentCart));
            }
        } catch (err) {
            yield put(getCartError(err));
        }
    }else{
        try {
            const localCart = JSON.parse(
                JSON.parse(localStorage.getItem('persist:martfury')).cart
            );
            let selectedItem = localCart.cartItems.find(
                item => item.id === product.id
            );
    
            if (selectedItem) {
                selectedItem.quantity--;
                localCart.cartTotal--;
                localCart.amount = calculateAmount(localCart.cartItems);
            }
            yield put(updateCartSuccess(localCart));
        } catch (err) {
            yield put(getCartError(err));
        }
    }
}

function* clearCartSaga() {
    const auth = yield select(getAuth)
    const emptyCart = {
        cartItems: [],
        amount: 0,
        cartTotal: 0,
    };
    if(auth && auth.isLoggedIn) {
        try {
            const res = yield call(axios.post, server + endpoints.CLEARCART, { auth: auth });
            if(!res.data.errors) {
                yield put(clearCartSuccess(emptyCart));
            }
        } catch (err) {
            yield put(updateCartError(err));
        }
    }else{
        try {
            yield put(clearCartSuccess(emptyCart));
        } catch (err) {
            yield put(updateCartError(err));
        }
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_CART, getCartSaga)]);
    yield all([takeEvery(actionTypes.ADD_ITEM, addItemSaga)]);
    yield all([takeEvery(actionTypes.REMOVE_ITEM, removeItemSaga)]);
    yield all([takeEvery(actionTypes.INCREASE_QTY, increaseQtySaga)]);
    yield all([takeEvery(actionTypes.DECREASE_QTY, decreaseItemQtySaga)]);
    yield all([takeEvery(actionTypes.CLEAR_CART, clearCartSaga)]);
}
