import { all, put, takeEvery, call, select } from 'redux-saga/effects';
import { notification } from 'antd';

import axios from 'axios';
import { endpoints } from '../../apis';

const server = process.env.server;

import {
    actionTypes,
    getWishlistListSuccess,
    getWishlistSuccessFromDb,
    updateWishlistListSuccess,
} from './action';

import {
    getAuth,
    getWishlist
} from '../selectors'

const modalSuccess = type => {
    notification[type]({
        message: 'Added to wishlisht!',
        description: 'This product has been added to wishlist!',
    });
};

const modalWarning = type => {
    notification[type]({
        message: 'Removed from wishlist',
        description: 'This product has been removed from wishlist!',
    });
};

function* getWishlistListSaga() {
    const auth = yield select(getAuth)
    if(auth && auth.isLoggedIn) {
        try {
            let wishlistItems =[]
            let wishlistTotal = 0
            const res = yield call(axios.post, server + endpoints.GETWISHLIST, auth);
            if(res.data.length > 0) {
                wishlistItems = res.data.map((item) => {
                    return {
                        badge: [],
                        brand: [],
                        categories: [],
                        variants: [],
                        id: item.WishlistID,
                        price: item.Product ? +item.Product.price : 0,
                        rating: item.Product && +item.Product.rating > 0 ? true : false,
                        ratingCount: item.Product ? +item.Product.rating : 0,
                        sale: false,
                        salePrice: 0,
                        thumbnail: item.Product ? item.Product.img : '',
                        title: item.Product ? item.Product.title : '',
                        vendor: 'Yong shop-'
                    }
                })
                wishlistTotal = res.data.length
            }
            yield put(getWishlistSuccessFromDb({
                wishlistItems,
                wishlistTotal
            }));
        } catch (err) { 
            yield put(getCartErrorFromDb(err));
        }
    }else{
        try {
            const localWishlistList = JSON.parse(
                localStorage.getItem('persist:martfury')
            ).wishlist;
            yield put(getWishlistListSuccess(localWishlistList));
        } catch (err) {
            console.log(err);
        }
    }
}

function* addItemToWishlistSaga(payload) {
    const { product } = payload;
    const auth = yield select(getAuth)

    if(auth && auth.isLoggedIn) {
        try {
            let currentWishlist = yield select(getWishlist)
            let existItem = currentWishlist.wishlistItems.find(
                item => item.id === product.id
            );
        
            if (!existItem) {
                currentWishlist.wishlistItems.push(product);
                currentWishlist.wishlistTotal++;

                const res = yield call(axios.post, server + endpoints.ADDWISHLIST, { product: product, auth: auth });

                if(!res.data.errors) {
                    yield put(updateWishlistListSuccess(currentWishlist));
                    modalSuccess('success');
                }
            }
        } catch (err) {
            console.log(err);
        }
    }else{
        try {
            let localWishlist = JSON.parse(
                JSON.parse(localStorage.getItem('persist:martfury')).wishlist
            );
    
            let existItem = localWishlist.wishlistItems.find(
                item => item.id === product.id
            );
    
            if (!existItem) {
                localWishlist.wishlistItems.push(product);
                localWishlist.wishlistTotal++;
                yield put(updateWishlistListSuccess(localWishlist));
                modalSuccess('success');
            }
        } catch (err) {
            console.log(err);
        }
    }
}

function* removeItemWishlistSaga(payload) {
    const { product } = payload; 
    const auth = yield select(getAuth)

    if(auth && auth.isLoggedIn) {
        try {
            let currentWishlist = yield select(getWishlist)
            let index = currentWishlist.wishlistItems.indexOf(product);
            const removeItem = { ...currentWishlist.wishlistItems[index] }
            currentWishlist.wishlistTotal = currentWishlist.wishlistTotal - 1;
            currentWishlist.wishlistItems.splice(index, 1);

            const res = yield call(axios.post, server + endpoints.REMOVEWISHLIST, { removeItem: removeItem, auth: auth });
            if(!res.data.errors) {
                yield put(updateWishlistListSuccess(currentWishlist));
                modalWarning('warning');    
            }
        } catch (err) {
            console.log(err);
        }
    }else{
        try {
            let localWishlist = JSON.parse(
                JSON.parse(localStorage.getItem('persist:martfury')).wishlist
            );
            let index = localWishlist.wishlistItems.indexOf(product);
            localWishlist.wishlistTotal = localWishlist.wishlistTotal - 1;
            localWishlist.wishlistItems.splice(index, 1);
            yield put(updateWishlistListSuccess(localWishlist));
            modalWarning('warning');
        } catch (err) {
            console.log(err);
        }
    }
}

function* clearWishlistListSaga() {
    const auth = yield select(getAuth)
    const emptyWishlist = {
        wishlistItems: [],
        wishlistTotal: 0,
    };
    if(auth && auth.isLoggedIn) {
        try {
            const res = yield call(axios.post, server + endpoints.CLEARWISHLIST, { auth: auth });
            if(!res.data.errors) {
                yield put(updateWishlistListSuccess(emptyWishlist));
            }
        } catch (err) {
            console.log(err);
        }
    }else{
        try {
            yield put(updateWishlistListSuccess(emptyWishlist));
        } catch (err) {
            console.log(err);
        }
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_WISHLIST_LIST, getWishlistListSaga)]);
    yield all([
        takeEvery(actionTypes.ADD_ITEM_WISHLISH, addItemToWishlistSaga),
    ]);
    yield all([
        takeEvery(actionTypes.REMOVE_ITEM_WISHLISH, removeItemWishlistSaga),
    ]);
    yield all([
        takeEvery(actionTypes.CLEAR_WISHLISH_LIST, clearWishlistListSaga),
    ]);
}
