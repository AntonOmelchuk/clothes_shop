import React from 'react';
import {shallow} from 'enzyme';
import {CartItem} from './cart-item.component';

it('renders CartItem component', () => {
  const mockItem = {
    imageUrl: 'www.testUrl.com',
    price: 21,
    name: 'test',
    quantity: 30,
  };

  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});
