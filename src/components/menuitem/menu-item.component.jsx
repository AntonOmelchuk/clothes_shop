import React from 'react';

import './menu-item.style.scss';

export const MenuItem = ({title, image, size}) => (
  <div
    style={{
      backgroundImage: `url(${image})`
    }}
    className={size ? `${size} menu-item` : 'menu-item'}
  >
    <div className='content'>
      <div className='title'>{title}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);
