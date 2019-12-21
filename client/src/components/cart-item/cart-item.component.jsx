import React from 'react';

import './cart-item.styles.scss';

export const CartItem = ({item: {imageUrl, name, price, quantity}}) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} &times; ${price} ({price * quantity})
        </span>
      </div>
    </div>
  );
};
