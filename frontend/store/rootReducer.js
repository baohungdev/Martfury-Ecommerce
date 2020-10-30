import { combineReducers } from 'redux';
import post from './post/reducer';
import product from './product/reducer';
import setting from './setting/reducer';
import cart from './cart/reducer';
import compare from './compare/reducer';
import auth from './auth/reducer';
import wishlist from './wishlist/reducer';
import order from './order/reducer';
import shipping from './shipping/reducer';

export default combineReducers({
    auth,
    post,
    product,
    setting,
    cart,
    compare,
    wishlist,
    order,
    shipping
});
