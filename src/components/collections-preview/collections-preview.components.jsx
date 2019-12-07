import React from 'react';
import {CollectionItem} from '../collection-item/collection-item.component';
import './collections-preview.style.scss';

export const CollectionsPreview = ({title, items}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx, 4)
          .map(({id, ...restProps}) => (
            <CollectionItem key={id} {...restProps} />
          ))}
      </div>
    </div>
  );
};
