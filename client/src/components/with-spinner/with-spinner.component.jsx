import React from 'react';

import Spinner from '../spinner/Spinner';

export const WithSpinner = WrappedComponent => ({isLoading, ...restProps}) =>
  isLoading ? <Spinner /> : <WrappedComponent {...restProps} />;

export default WithSpinner;
