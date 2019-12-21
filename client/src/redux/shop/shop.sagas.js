import {takeEvery, call, put, all} from 'redux-saga/effects';

import {
  convertCollectionsShapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';

import {ShopActionTypes} from './types';
import {
  fetchingCollectionsFailure,
  fetchingCollectionsSuccess,
} from './shop.action';

export function* watcherFetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCHING_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsShapshotToMap,
      snapshot
    );
    yield put(fetchingCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchingCollectionsFailure(err));
  }
}

export default function* shopSage() {
  yield all([call(watcherFetchCollectionsStart)]);
}
