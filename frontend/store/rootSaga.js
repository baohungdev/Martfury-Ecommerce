import { all } from 'redux-saga/effects';
import PostSaga from './post/saga';
import ProductSaga from './product/saga';
import SettingSaga from './setting/saga';
import CartSaga from './cart/saga';
import AuthSaga from './auth/saga';
import CompareSaga from './compare/saga';
import WishlistSaga from './wishlist/saga';
import OrderSaga from './order/saga';
import ShippingSaga from './shipping/saga';

export default function* rootSaga() {
    yield all([
        PostSaga(),
        ProductSaga(),
        SettingSaga(),
        CartSaga(),
        AuthSaga(),
        CompareSaga(),
        WishlistSaga(),
        OrderSaga(),
        ShippingSaga()
    ]);
}
