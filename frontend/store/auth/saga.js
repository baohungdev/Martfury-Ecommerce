import { all, put, call, takeEvery, fork } from 'redux-saga/effects';

import { actionTypes, loginSuccess, registerSuccess, logOutSuccess, loginFailed, oauthSuccess, submitSuccess, authorizateSuccess, authorizateFailed } from './action';

import axios from 'axios';
import { endpoints } from '../../apis';
const server = process.env.server;

function* setHeader() {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('accesstoken')) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accesstoken');
    }
  }
}

function* authorizateSaga() {
  try {
    yield call(setHeader)
    const res = yield call(axios.post, server + endpoints.AUTHORIZATE, {});
    yield put(authorizateSuccess({ user: res.data }));
  } catch (err) {
    console.log(err);
    yield put(authorizateFailed());
  }
}

function* loginSaga(action) {
  try {
    const res = yield call(axios.post, server + endpoints.LOGIN, action.payload);
    localStorage.setItem('accesstoken', res.data.token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
    yield put(loginSuccess(res.data));
  } catch (err) {
    yield put(loginFailed(err.response && err.response.data || 'Failed'));
  }
}

function* registerSaga(action) {
  try {
    yield call(axios.post, server + endpoints.SIGNUP, action.payload);
    yield put(registerSuccess());
  } catch (err) {
    console.log(err)
    yield put(loginFailed(err.response && err.response.data || 'Failed'));
  }
}

function* logOutSaga() {
  try {
    localStorage.clear();
    axios.defaults.headers.common['Authorization'] = '';
    yield put(logOutSuccess());
  } catch (err) {
    console.log(err);
  }
}

function* loginOauthSaga(action) {
  try {
    if (action.target === 'facebook') {
      const res = yield call(axios.get, server + endpoints.FACEBOOKLOGIN);
      // yield call(axios.get, server + endpoints.FACEBOOKLOGINCALLBACK);
      if (res.data && res.data.token) yield put(oauthSuccess(action.target, res.data.token));
      else yield put(loginFailed('Facebook OAuth is not vaild!'));
    } else if (action.target === 'google') {
      const res = yield call(axios.get, server + endpoints.GOOGLELOGIN);
      // yield call(axios.get, server + endpoints.GOOGLELOGINCALLBACK);
      if (res.data && res.data.token) yield put(oauthSuccess(action.target, res.data.token));
      else yield put(loginFailed('Google OAuth is not vaild!'));
    }
  } catch (err) {
    console.log(err);
    yield put(loginFailed(err.response && err.response.data || 'OAuth Failed!'));
  }
}

function* updateAccountSaga(action) {
  try {
    yield call(axios.post, server + endpoints.UPDATEACCOUNT, action.payload);
    yield put(submitSuccess('Account information is updated successfully!', action.payload));
  } catch (err) {
    yield put(loginFailed(err.response && err.response.data || 'Failed!'));
  }
}

function* updateBillingAddressSaga(action) {
  try {
    const res = yield call(axios.post, server + endpoints.UPDATEBILLING, action.payload);
    yield put(submitSuccess('Billing Address is updated success!', action.payload));
  } catch (err) {
    console.log(err);
    yield put(loginFailed(err.response && err.response.data || 'Failed!'));
  }
}

function* updateShippingAddressSaga(action) {
  try {
    yield call(axios.post, server + endpoints.UPDATEBILLING, action.payload);
    yield put(submitSuccess('Shipping Address is updated success!', action.payload));
  } catch (err) {
    console.log(err);
    yield put(loginFailed(err.response && err.response.data || 'Failed!'));
  }
}

function* getAccountSaga() {
  try {
    yield call(setHeader)
    const res = yield call(axios.get, server + endpoints.GETACCOUNT);
    yield put(submitSuccess('', res.data));
  } catch (err) {
    yield put(loginFailed(err.response && err.response.data || 'Failed!'));
  }
}

function* getAddressSaga() {
  try {
    yield call(setHeader)
    const res = yield call(axios.get, server + endpoints.GETADDRESS);
    yield put(submitSuccess('', res.data));
  } catch (err) {
    yield put(loginFailed(err.response && err.response.data || 'Failed!'));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.LOGIN_REQUEST, loginSaga),
    takeEvery(actionTypes.REGISTER_REQUEST, registerSaga),
    takeEvery(actionTypes.LOGOUT, logOutSaga),
    takeEvery(actionTypes.LOGIN_OAUTH, loginOauthSaga),
    takeEvery(actionTypes.UPDATE_ACCOUNT_REQUEST, updateAccountSaga),
    takeEvery(actionTypes.UPDATE_BILLINGADDRESS_REQUEST, updateBillingAddressSaga),
    takeEvery(actionTypes.UPDATE_SHIPPINGADDRESS_REQUEST, updateShippingAddressSaga),
    takeEvery(actionTypes.CHECK_AUTHORIZATION, authorizateSaga),
    takeEvery(actionTypes.GET_ACCOUNT_REQUEST, getAccountSaga),
    takeEvery(actionTypes.GET_ADDRESS_REQUEST, getAddressSaga)
  ]);
}
