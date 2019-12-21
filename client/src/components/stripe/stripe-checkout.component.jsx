import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export const StripeCheckoutButton = ({price}) => {
  const stripePrice = price * 100;
  const stripeKey = 'pk_test_rnavDcr0xgjPmloqM2xAJW1300a1oKVYCy';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: stripePrice,
        token,
      },
    })
      .then(res => alert('Payment successful'))
      .catch(err => {
        alert('There was an issue with your payment');
        console.log('Payment error ' + err);
      });
  };

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
