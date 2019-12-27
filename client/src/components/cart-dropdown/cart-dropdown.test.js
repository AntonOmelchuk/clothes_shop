import React from 'react';
import {shallow} from 'enzyme';

import {CartDropdown} from './cart-dropdown.component';
import {CartItem} from '../cart-item/cart-item.component';

let wrapper;
const mockCartItems = [{id: 1}, {id: 2}, {id: 3}];
const mockHistory = jest.fn();
const mockDispatch = jest.fn();

beforeEach(() => {
  const mockProps = {
    cartItems: mockCartItems,
    history: mockHistory,
    dispatch: mockDispatch,
  };

  wrapper = shallow(<CartDropdown {...mockProps} />);
});

it('renders CartDropdown component', () => {
  expect(wrapper).toMatchSnapshot();
});

it('renders an equal number CartItem components as the cartItems prop', () => {
  expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
});
