import {takeEvery, call, put} from 'redux-saga/effects';

import {ShopActionTypes} from './types';
import {
  convertCollectionsShapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import {
  fetchingCollectionsFailure,
  fetchingCollectionsSuccess,
} from './shop.action';

export function* fetchCollectionsStart() {
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
