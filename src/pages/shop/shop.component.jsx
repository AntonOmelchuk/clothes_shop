import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchingCollectionsStart} from '../../redux/shop/shop.action';

import {CollectionsOverviewContainer} from '../../components/collections-overview/collections-overview.container';
import {CollectionPageContainer} from '../collection/collection-page.container';

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchingCollectionsStart();
  }

  render() {
    const {match} = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:categoryId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

export default connect(null, {fetchingCollectionsStart})(ShopPage);
