import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.action';

import {
  AddButton,
  CollectionFooter,
  CollectionItemContainer,
  ImageContainer,
  ItemName,
  ItemPrice,
} from './collection-item.style';

export const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item;

  return (
    <CollectionItemContainer>
      <ImageContainer className='image' imageUrl={imageUrl} />
      <CollectionFooter>
        <ItemName>{name}</ItemName>
        <ItemPrice>${price}</ItemPrice>
      </CollectionFooter>
      <AddButton inverted={true} onClick={() => addItem(item)}>
        add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default connect(null, {addItem})(CollectionItem);
