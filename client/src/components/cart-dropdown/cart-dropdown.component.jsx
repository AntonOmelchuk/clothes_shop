import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyCart,
} from './cart-dropdown.style';

import {CustomButton} from '../custom-button/custom-button.component';
import {CartItem} from '../cart-item/cart-item.component';

import {selectCartItems} from '../../redux/cart/cart.selectors';
import {actionClearCart, hideCart} from '../../redux/cart/cart.action';

export const CartDropdown = ({cartItems, history, dispatch}) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyCart>Your cart is empty</EmptyCart>
      )}
    </CartItemsContainer>
    <CustomButton onClick={() => dispatch(actionClearCart())}>
      Clear cart
    </CustomButton>
    <CustomButton
      id='checkout-button'
      onClick={() => {
        history.push('/checkout');
        dispatch(hideCart());
      }}
    >
      Go to checkout
    </CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
