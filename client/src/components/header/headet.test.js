import {shallow} from 'enzyme';
import React from 'react';

import {Header} from './header.component';

let wrapper;
let mockSignOutStart;

beforeEach(() => {
  mockSignOutStart = jest.fn();

  const mockProps = {
    hidden: true,
    currentUser: {
      uid: '123',
    },
    signOutStart: mockSignOutStart,
  };

  wrapper = shallow(<Header {...mockProps} />);
});

it('renders Header component', () => {
  expect(wrapper).toMatchSnapshot();
});
