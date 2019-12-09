import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectTotalPrice,
} from '../../redux/cart/cart.selectors';
import {StripeCheckoutButton} from '../../components/stripe/stripe-checkout.component';

const CheckoutPage = ({cartItems, total}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(item => (
      <CheckoutItem key={item.id} item={item} />
    ))}
    <div className='total'>Total ${total}</div>
    <div className='test-card'>
      Test credit car for payment
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CCV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);