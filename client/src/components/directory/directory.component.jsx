import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {DirectoryMenuContainer} from './directory.style';

import {selectDirectorySections} from '../../redux/directory/directoy.selectors';

import MenuItem from '../menu-item/menu-item.component';

export const Directory = ({sections}) => (
  <DirectoryMenuContainer>
    {sections.map(({id, ...restProps}) => (
      <MenuItem key={id} {...restProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
