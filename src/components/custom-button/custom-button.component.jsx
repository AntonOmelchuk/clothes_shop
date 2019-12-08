import React from 'react';

import './custom-button.style.scss';

export const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...restProps
}) => (
  <button
    className={`${inverted && 'inverted'} ${isGoogleSignIn &&
      'google-sign-in'} custom-button`}
    {...restProps}
  >
    {children}
  </button>
);
