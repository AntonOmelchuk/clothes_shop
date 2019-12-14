import {all} from 'redux-saga/effects';

import {fetchCollectionsStart} from './shop/shop.sagas';
import userSaga from './users/user.sagas';

export default function* rootSaga() {
  yield all([fetchCollectionsStart(), userSaga()]);
}
