import React from 'react';

import Spinner from '../spinner/Spinner';

const WithSpinner = WrappedComponent => ({isLoading, ...restProps}) =>
  isLoading ? <Spinner /> : <WrappedComponent {...restProps} />;

export default WithSpinner;
