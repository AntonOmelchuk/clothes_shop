import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export const StripeCheckoutButton = ({price}) => {
  const stripePrice = price * 100;
  const stripeKey = 'pk_test_rnavDcr0xgjPmloqM2xAJW1300a1oKVYCy';

  const onToken = () => alert('Payment successful');

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing Shop'
      token={onToken}
      stripeKey={stripeKey}
      amount={stripePrice}
      shippingAddress
      billingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      panelLabel='Pay Now'
    />
  );
};
