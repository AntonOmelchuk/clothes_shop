import {CartActionTypes} from './types';

export const toggleHidden = () => ({type: CartActionTypes.TOGGLE_HIDDEN});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearCart = () => ({type: CartActionTypes.CLEAR_CART});

export const actionClearCart = () => ({
  type: CartActionTypes.ONCLICK_CLEAR_BUTTON,
});

export const removeItemFromCart = id => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: id,
});

export const decreaseItemQuantity = id => ({
  type: CartActionTypes.DECREASE_QUANTITY,
  payload: id,
});

export const increaseItemQuantity = id => ({
  type: CartActionTypes.INCREASE_QUANTITY,
  payload: id,
});
