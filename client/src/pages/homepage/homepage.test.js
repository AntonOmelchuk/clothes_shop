import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './homepage.component';

it('renders Homepage component', () => {
  expect(shallow(<Homepage />)).toMatchSnapshot();
});
