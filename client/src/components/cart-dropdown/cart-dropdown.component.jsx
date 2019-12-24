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
import {actionClearCart, toggleHidden} from '../../redux/cart/cart.action';

const CartDropdown = ({cartItems, history, actionClearCart}) => (
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
    <CustomButton onClick={() => actionClearCart()}>Clear cart</CustomButton>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        toggleHidden();
      }}
    >
      Go to checkout
    </CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, {actionClearCart})(CartDropdown)
);
