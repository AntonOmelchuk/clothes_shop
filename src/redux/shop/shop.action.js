import {ShopActionTypes} from './types';

import {
  convertCollectionsShapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';

export const setCollections = collections => ({
  type: ShopActionTypes.SET_COLLECTIONS,
  payload: collections,
});

export const fetchingCollectionsStart = () => ({
  type: ShopActionTypes.FETCHING_COLLECTIONS_START,
});

export const fetchingCollectionsSuccess = collections => ({
  type: ShopActionTypes.FETCHING_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchingCollectionsFailure = error => ({
  type: ShopActionTypes.FETCHING_COLLECTIONS_FAILURE,
  payload: error,
});

export const fetchingCollectionsStartAsync = () => dispatch => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchingCollectionsStart());
  collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsShapshotToMap(snapshot);

      dispatch(fetchingCollectionsSuccess(collectionsMap));
    })
    .catch(error => dispatch(fetchingCollectionsFailure(error)));
};
