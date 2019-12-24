import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemImage,
} from './cart-item.style';

export const CartItem = ({item: {imageUrl, name, price, quantity}}) => {
  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} &times; ${price} ({price * quantity})
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};
