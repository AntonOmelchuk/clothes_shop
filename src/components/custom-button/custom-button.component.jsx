import React from 'react';

import './custom-button.style.scss';

export const CustomButton = ({children, isGoogleSignIn, ...restProps}) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...restProps}
  >
    {children}
  </button>
);
