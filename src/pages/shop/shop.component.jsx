import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectShopCollections} from '../../redux/shop/shop.selectors';

import {CollectionsPreview} from '../../components/collections-preview/collections-preview.components';

const ShopPage = ({collections}) => (
  <div className='shop-page'>
    {collections.map(({id, ...restProps}) => (
      <CollectionsPreview key={id} {...restProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
