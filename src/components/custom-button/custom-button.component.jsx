import React from 'react';

import './custom-button.style.scss';

export const CustomButton = ({children, ...restProps}) => (
  <button className='custom-button' {...restProps}>
    {children}
  </button>
);
