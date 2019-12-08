import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingBagIcon} from '../../assets/shopping-bag.svg';

import {toggleHidden} from '../../redux/cart/cart.action';

import './cart-icon.style.scss';

const CartIcon = ({toggleHidden}) => (
  <div className='cart-icon' onClick={toggleHidden}>
    <ShoppingBagIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

export default connect(null, {toggleHidden})(CartIcon);
