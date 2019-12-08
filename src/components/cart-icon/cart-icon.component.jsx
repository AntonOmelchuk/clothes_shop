import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './cart-icon.style.scss';

import {ReactComponent as ShoppingBagIcon} from '../../assets/shopping-bag.svg';

import {toggleHidden} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleHidden, itemsCount}) => (
  <div className='cart-icon' onClick={toggleHidden}>
    <ShoppingBagIcon className='shopping-icon' />
    <span className='item-count'>{itemsCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps, {toggleHidden})(CartIcon);
