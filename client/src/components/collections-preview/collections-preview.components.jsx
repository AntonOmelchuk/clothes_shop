import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  PreviewContainer,
  Title,
} from './collections-preview.style';

export const CollectionsPreview = ({title, items}) => {
  return (
    <CollectionPreviewContainer>
      <Title>{title}</Title>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx, 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};
