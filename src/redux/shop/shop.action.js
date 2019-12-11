import {ShopActionTypes} from './types';

export const setCollections = collections => ({
  type: ShopActionTypes.SET_COLLECTIONS,
  payload: collections,
});
