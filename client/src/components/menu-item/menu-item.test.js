import {shallow} from 'enzyme';
import React from 'react';

import {MenuItem} from './menu-item.component';

let wrapper;
let mockMatch;
let mockHistory;
const linkUrl = '/hats';
const size = 'large';
const imageUrl = 'testimage';

beforeEach(() => {
  mockMatch = {
    url: '/shop',
  };

  mockHistory = {
    push: jest.fn(),
  };

  const mockProps = {
    match: mockMatch,
    history: mockHistory,
    linkUrl,
    size,
    title: 'hats',
    imageUrl,
  };

  wrapper = shallow(<MenuItem {...mockProps} />);
});

it('should render MenuItem component', () => {
  expect(wrapper).toMatchSnapshot();
});
