import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection-page.component';

import {
  convertCollectionsShapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';

import {setCollections} from '../../redux/shop/shop.action';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const {setCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsShapshotToMap(snapshot);
      setCollections(collectionsMap);
      this.setState({loading: false});
    });
  }

  render() {
    const {match} = this.props;
    const {loading} = this.state;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

export default connect(null, {setCollections})(ShopPage);
