import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection-page.component';
import {
  convertCollectionsShapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';

import {setCollections} from '../../redux/shop/shop.action';

class ShopPage extends React.Component {
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const {setCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsShapshotToMap(snapshot);
      setCollections(collectionsMap);
    });
  }

  render() {
    const {match} = this.props;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
      </div>
    );
  }
}

export default connect(null, {setCollections})(ShopPage);
