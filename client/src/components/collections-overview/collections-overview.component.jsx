import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {CollectionsOverviewContainer} from './collections-overview.style';

import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';

import {CollectionsPreview} from '../collections-preview/collections-preview.components';

export const CollectionsOverview = ({collections}) => (
  <CollectionsOverviewContainer>
    {collections.map(({id, ...restProps}) => (
      <CollectionsPreview key={id} {...restProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
