import React from 'react';
import {shallow} from 'enzyme';

import {CheckoutPage} from './checkout.component';

let wrapper;
beforeEach(() => {
  const mockProps = {
    cartItems: [],
    total: 99,
  };

  wrapper = shallow(<CheckoutPage {...mockProps} />);
});

it('renders CheckoutPage component', () => {
  expect(wrapper).toMatchSnapshot();
});

