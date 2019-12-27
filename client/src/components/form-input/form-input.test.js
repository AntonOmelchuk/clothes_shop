import {shallow} from 'enzyme';
import React from 'react';

import {FormInput} from './form-input.component';

let wrapper;
let mockHandleChange;

beforeEach(() => {
  mockHandleChange = jest.fn();

  const mockProps = {
    label: 'email',
    value: 'test@gmail.com',
    handleChange: mockHandleChange,
  };

  wrapper = shallow(<FormInput {...mockProps} />);
});

it('renders FormInput component', () => {
  expect(wrapper).toMatchSnapshot();
});
