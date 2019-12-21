import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directoy.selectors';

import './directory.style.scss';

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({sections}) => (
  <div className='directory-menu'>
    {sections.map(({id, ...restProps}) => (
      <MenuItem key={id} {...restProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);