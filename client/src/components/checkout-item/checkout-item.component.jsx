import React from 'react';
import {connect} from 'react-redux';

import './checkout-item.styles.scss';

import {
  removeItemFromCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../redux/cart/cart.action';

const CheckoutItem = ({
  item: {imageUrl, name, quantity, price, id},
  dispatch,
}) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt={name} />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <span
        className='arrow'
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        &#10094;
      </span>
      <span className='value'>{quantity}</span>
      <span
        className='arrow'
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        &#10095;
      </span>
    </span>
    <span className='price'>{price}</span>
    <div
      className='remove-button'
      onClick={() => dispatch(removeItemFromCart(id))}
    >
      &#10005;
    </div>
  </div>
);

export default connect(null)(CheckoutItem);
