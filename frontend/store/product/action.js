export const actionTypes = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',
    GET_PRODUCTS_BY_CATEGORY: 'GET_PRODUCTS_BY_CATEGORY',
    GET_PRODUCTS_BY_PRICE_RANGE: 'GET_PRODUCTS_BY_PRICE_RANGE',
    GET_PRODUCTS_BY_BRAND: 'GET_PRODUCTS_BY_BRAND',
    GET_PRODUCTS_BY_KEYWORD: 'GET_PRODUCTS_BY_KEYWORD',
    GET_PRODUCT_BY_ID: 'GET_PRODUCT_BY_ID',
    GET_PRODUCT_BY_ID_SUCCESS: 'GET_PRODUCT_BY_ID_SUCCESS',
};

export function getProducts() {
    return { type: actionTypes.GET_PRODUCTS };
}

export function getProductsSuccess(data) {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        data,
    };
}

export function getSingleProductsSuccess(data) {
    return {
        type: actionTypes.GET_PRODUCT_BY_ID_SUCCESS,
        data,
    };
}

export function getProductsError(error) {
    return {
        type: actionTypes.GET_PRODUCTS_ERROR,
        error,
    };
}

export function getProductsByCategory(category) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_CATEGORY,
        category,
    };
}

export function getProductsByBrand(brand) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_BRAND,
        brand,
    };
}
export function getProductsByKeyword(keyword) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_KEYWORD,
        keyword,
    };
}

export function getProductsById(id) {
    return {
        type: actionTypes.GET_PRODUCT_BY_ID,
        id,
    };
}

export function getProductsByPrice(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_PRICE_RANGE,
        payload,
    };
}
