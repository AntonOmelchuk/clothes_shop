import React from 'react';

import {CustomButtonContainer} from './custom-button.style';

export const CustomButton = ({children, ...props}) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
