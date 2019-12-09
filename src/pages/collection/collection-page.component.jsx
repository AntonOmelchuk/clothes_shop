import React from 'react';
import {connect} from 'react-redux';

import './collection.styles.scss';

import {selectCollectionItem} from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({match, collection}) => (
  <div className='collection-page'>
    <div className='title'>{collection.title}</div>
    <div className='items'>
      {collection.items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionItem(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
