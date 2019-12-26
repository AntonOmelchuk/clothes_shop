import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlock, TestCard,
  Total,
} from './checkout.style';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectTotalPrice,
} from '../../redux/cart/cart.selectors';
import {StripeCheckoutButton} from '../../components/stripe/stripe-checkout.component';

export const CheckoutPage = ({cartItems, total}) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeaderContainer>
    {cartItems.map(item => (
      <CheckoutItem key={item.id} item={item} />
    ))}
    <Total>Total ${total}</Total>
    <TestCard>
      Test credit card for payment
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CCV: 123
    </TestCard>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
