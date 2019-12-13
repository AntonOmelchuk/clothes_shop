import {ShopActionTypes} from './types';

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
