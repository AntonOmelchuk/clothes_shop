import React from 'react';
import {connect} from 'react-redux';

import {
  CollectionPageContainer,
  ItemsContainer,
  Title,
} from './collection-page.style';

import {selectCollectionItem} from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({collection}) => (
  <CollectionPageContainer>
    <Title>{collection.title}</Title>
    <ItemsContainer>
      {collection.items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </ItemsContainer>
  </CollectionPageContainer>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionItem(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
