import {CartActionTypes} from './types';

export const toggleHidden = () => ({type: CartActionTypes.TOGGLE_HIDDEN});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
