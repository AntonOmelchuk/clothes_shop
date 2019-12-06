import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.style.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
  <div
    className={size ? `${size} menu-item` : 'menu-item'}
    onClick={() => history.push(`${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <div className='title'>{title}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
