import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.action';

import {CustomButton} from '../custom-button/custom-button.component';

import './collection-item.style.scss';

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton
        className='custom-button'
        inverted={true}
        onClick={() => addItem(item)}
      >
        add to cart
      </CustomButton>
    </div>
  );
};

export default connect(null, {addItem})(CollectionItem);
