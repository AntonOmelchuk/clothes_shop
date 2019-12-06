import React from 'react';

import './menu-item.style.scss';

export const MenuItem = ({title, image, size}) => (
  <div className={size ? `${size} menu-item` : 'menu-item'}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${image})`
      }}
    />
    <div className='content'>
      <div className='title'>{title}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);
