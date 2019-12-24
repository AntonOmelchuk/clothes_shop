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

const CheckoutItem = ({
  item: {imageUrl, name, quantity, price, id},
  dispatch,
}) => (
  <CheckoutItemContainer>
    <ImageContainer>
      <Image src={imageUrl} alt={name} />
    </ImageContainer>
    <TextInfo>{name}</TextInfo>
    <QuantityContainer>
      <div onClick={() => dispatch(decreaseItemQuantity(id))}>&#10094;</div>
      <span>{quantity}</span>
      <div onClick={() => dispatch(increaseItemQuantity(id))}>&#10095;</div>
    </QuantityContainer>
    <TextInfo>{price}</TextInfo>
    <RemoveButton onClick={() => dispatch(removeItemFromCart(id))}>
      &#10005;
    </RemoveButton>
  </CheckoutItemContainer>
);

export default connect(null)(CheckoutItem);
