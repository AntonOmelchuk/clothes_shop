import React from 'react';

import {CollectionsPreview} from '../../components/collections-preview/collections-preview.components';
import {SHOP_DATA} from './shop.data';

export class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    return (
      <div className='shop-page'>
        {this.state.collections.map(({id, ...restProps}) => (
          <CollectionsPreview key={id} {...restProps} />
        ))}
      </div>
    );
  }
}
