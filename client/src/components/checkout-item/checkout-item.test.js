import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {CheckoutItem} from './checkout-item.component';

Enzyme.configure({adapter: new Adapter()});

let wrapper, mockDecrease, mockIncrease, mockRemoveItem;

beforeEach(() => {
  mockDecrease = jest.fn();
  mockIncrease = jest.fn();
  mockRemoveItem = jest.fn();

  const mockProps = {
    item: {
      imageUrl: 'www.testUrl.com',
      price: 21,
      name: 'test',
      quantity: 30,
    },
    removeItemFromCart: mockRemoveItem,
    decreaseItemQuantity: mockDecrease,
    increaseItemQuantity: mockIncrease,
  };

  wrapper = shallow(<CheckoutItem {...mockProps} />);
});

test('renders CheckoutItem component', () => {
  expect(wrapper).toMatchSnapshot();
});


