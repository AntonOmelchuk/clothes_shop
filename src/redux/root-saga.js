import {all} from 'redux-saga/effects';

import shopSage from './shop/shop.sagas';
import userSaga from './users/user.sagas';
import cartSaga from './cart/cart.sagas';

export default function* rootSaga() {
  yield all([shopSage(), userSaga(), cartSaga()]);
}
