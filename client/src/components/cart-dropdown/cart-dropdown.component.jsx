import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import './cart-dropdown.styles.scss';

import {CustomButton} from '../custom-button/custom-button.component';
import {CartItem} from '../cart-item/cart-item.component';

import {selectCartItems} from '../../redux/cart/cart.selectors';
import {actionClearCart, toggleHidden} from '../../redux/cart/cart.action';

const CartDropdown = ({cartItems, history, dispatch, actionClearCart}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-cart'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => actionClearCart()}
      style={{
        marginBottom: '12px',
      }}
    >
      Clear cart
    </CustomButton>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleHidden());
      }}
    >
      Go to checkout
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, {actionClearCart})(CartDropdown)
);
