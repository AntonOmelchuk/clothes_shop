import React from 'react';
import {connect} from 'react-redux';

import {
  CheckoutItemContainer,
  Image,
  ImageContainer,
  QuantityContainer,
  RemoveButton,
  TextInfo,
} from './checkout-item.style';

import {
  removeItemFromCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../redux/cart/cart.action';

export const CheckoutItem = ({
  item,
  removeItemFromCart,
  decreaseItemQuantity,
  increaseItemQuantity,
}) => {
  const {imageUrl, name, quantity, price, id} = item;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <TextInfo>{name}</TextInfo>
      <QuantityContainer>
        <div onClick={() => decreaseItemQuantity(id)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => increaseItemQuantity(id)}>&#10095;</div>
      </QuantityContainer>
      <TextInfo>{price}</TextInfo>
      <RemoveButton onClick={() => removeItemFromCart(id)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default connect(null, {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItemFromCart,
})(CheckoutItem);
