import { all, put, call, takeEvery, select } from 'redux-saga/effects';
import { notification } from 'antd';
import Router from 'next/router';

import axios from 'axios';
import { endpoints } from '../../apis';

import {
  actionTypes,
  getShippingMethodSuccess,
  setShippingProcessSuccess
} from './action';

import {
  getAuth,
  getCart
} from '../selectors'

const server = process.env.server;

function* getShippingMethodSaga() {
  try {
    const res = yield call(axios.post, server + endpoints.GETSHIPPINGMETHOD);
    if(!res.data.errors) {
      const shippingMethod = res.data
      yield put(getShippingMethodSuccess({
        shippingMethod
      }));
    }
  } catch (err) {
    console.log(err)
  }
}

function* setShippingProcessSaga(payload) {
  const auth = yield select(getAuth)
  try {
    yield put(setShippingProcessSuccess({
      payment: payload.payload.payment
    }));
  } catch(err) {
    console.log(err)
  }
  if(auth && auth.isLoggedIn) {
    try {
      const res = yield call(axios.post, server + endpoints.SETSHIPPINGPROCESS, {data: payload.payload});
      if(!res.data.errors) {
        // Router.push('/account/order-list');
      }
    } catch (err) {
      console.log(err)
    }
  }
  
}

export default function* rootSaga() {
  yield all([takeEvery(actionTypes.GET_SHIPPING_METHOD, getShippingMethodSaga)]);
  yield all([takeEvery(actionTypes.SET_SHIPPING_PROCESS, setShippingProcessSaga)]);
}