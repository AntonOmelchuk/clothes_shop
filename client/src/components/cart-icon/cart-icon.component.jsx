import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {CartIconContainer, ItemCount, ShoppingIcon} from './cart-icon.style';

import {toggleHidden} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleHidden, itemsCount}) => (
  <CartIconContainer onClick={toggleHidden}>
    <ShoppingIcon />
    <ItemCount>{itemsCount}</ItemCount>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps, {toggleHidden})(CartIcon);
