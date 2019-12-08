import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({item: {imageUrl, name, quantity, price}}) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt={name} />
    </div>
    <span className='name'>{name}</span>
    <span className='name'>{quantity}</span>
    <span className='name'>{price}</span>
    <div className='remove-button'>&#10005;</div>
  </div>
);

export default CheckoutItem;
