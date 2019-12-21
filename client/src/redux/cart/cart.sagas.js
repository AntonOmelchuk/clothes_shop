import {takeLatest, put, all, call} from 'redux-saga/effects';

import {clearCart} from './cart.action';
import {UserActionTypes} from '../users/types';

export function* watcherSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, sagaClearCart);
}

export function* sagaClearCart() {
  yield put(clearCart());
}

export default function* cartSaga() {
  yield all([call(watcherSignOutSuccess)]);
}
