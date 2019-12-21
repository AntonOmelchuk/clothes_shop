import {ShopActionTypes} from './types';

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
