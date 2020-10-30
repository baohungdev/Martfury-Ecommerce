import { all, put, takeEvery } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import { products } from '../../public/static/data/product';

import {
    actionTypes,
    getProductsError,
    getProductsSuccess,
    getSingleProductsSuccess,
} from './action';

polyfill();

function* getProductsSaga() {
    try {
        const data = products;
        yield put(getProductsSuccess(data));
    } catch (err) {
        yield put(getProductsError(err));
    }
}

function* getProductById({ id }) {
    try {
        /*
         * Change this action by your API data
         */
        const data = products;
        if (id !== undefined) {
            const filteredProduct = data.filter(product => product.id === id);
            if (filteredProduct.length > 0) {
                yield put(getSingleProductsSuccess(filteredProduct[0]));
            }
        } else {
            yield put(getProductsSuccess(data));
        }
    } catch (err) {
        yield put(getProductsError(err));
    }
}

function* getProductByCategorySaga({ category }) {
    try {
        /*
         * Change this action by your API data
         */
        const data = products;
        if (category !== undefined) {
            const filteredProduct = data.filter(product =>
                product.categories.some(cat => cat.value == category)
            );

            yield put(getProductsSuccess(filteredProduct));
        } else {
            yield put(getProductsSuccess(data));
        }
    } catch (err) {
        yield put(getProductsError(err));
    }
}

function* getProductByPriceRangeSaga({ payload }) {
    try {
        /*
         * Change this action by your API data
         */
        const data = products;
        const filteredProduct = data.filter(
            product =>
                product.price >= payload[0] && product.price <= payload[1]
        );
        yield put(getProductsSuccess(filteredProduct));
    } catch (err) {
        yield put(getProductsError(err));
    }
}

function* getProductByBrandSaga({ brand }) {
    try {
        /*
         * Change this action by your API data
         */
        const data = products;
        const filterBrand = brand;
        if (typeof brand !== 'string') {
            const filterResult = data.filter(({ brand }) => {
                return brand.some(({ value }) => {
                    return filterBrand.includes(value);
                });
            });
            yield put(getProductsSuccess(filterResult));
        } else {
            const filteredProduct = data.filter(product =>
                product.brand.some(brandItem => brandItem.value === brand)
            );
            yield put(getProductsSuccess(filteredProduct));
        }
    } catch (err) {
        yield put(getProductsError(err));
    }
}

function* getProductByKeywordSaga({ keyword }) {
    try {
        /*
         * Change this action by your API data
         */
        const data = products;
        let regexp = new RegExp(keyword.toLowerCase(), 'g');
        const filteredProduct = data.filter(product =>
            product.title.toLowerCase().match(regexp)
        );
        if (filteredProduct > 0) {
            yield put(getProductsSuccess(filteredProduct));
        } else {
            const emptyArr = [];
            yield put(getProductsSuccess(emptyArr));
        }
    } catch (err) {
        yield put(getProductsError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_PRODUCTS, getProductsSaga)]);
    yield all([
        takeEvery(
            actionTypes.GET_PRODUCTS_BY_CATEGORY,
            getProductByCategorySaga
        ),
    ]);
    yield all([
        takeEvery(
            actionTypes.GET_PRODUCTS_BY_PRICE_RANGE,
            getProductByPriceRangeSaga
        ),
    ]);
    yield all([
        takeEvery(actionTypes.GET_PRODUCTS_BY_BRAND, getProductByBrandSaga),
    ]);
    yield all([
        takeEvery(actionTypes.GET_PRODUCTS_BY_KEYWORD, getProductByKeywordSaga),
    ]);
    yield all([takeEvery(actionTypes.GET_PRODUCT_BY_ID, getProductById)]);
}
