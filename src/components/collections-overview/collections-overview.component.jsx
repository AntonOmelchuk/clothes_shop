import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './collections-overview.styles.scss';

import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';

import {CollectionsPreview} from '../collections-preview/collections-preview.components';

const CollectionsOverview = ({collections}) => (
  <div className='collections-overview'>
    {collections.map(({id, ...restProps}) => (
      <CollectionsPreview key={id} {...restProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
