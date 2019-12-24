import React, {useEffect, lazy, Suspense} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {fetchingCollectionsStart} from '../../redux/shop/shop.action';
import Spinner from '../../components/spinner/Spinner';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection-page.container')
);

const ShopPage = ({fetchingCollectionsStart, match}) => {
  useEffect(() => {
    fetchingCollectionsStart();
  }, [fetchingCollectionsStart]);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:categoryId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

export default connect(null, {fetchingCollectionsStart})(ShopPage);
