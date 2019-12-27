import React from 'react';
import {shallow} from 'enzyme';
import {CartIcon} from './cart-icon.component';

let wrapper;
let mockToggleCartHidden;

beforeEach(() => {
  mockToggleCartHidden = jest.fn();

  const mockProps = {
    itemCount: 0,
    toggleHidden: mockToggleCartHidden,
  };

  wrapper = shallow(<CartIcon {...mockProps} />);
});

it('renders CartIcon component', () => {
  expect(wrapper).toMatchSnapshot();
});
