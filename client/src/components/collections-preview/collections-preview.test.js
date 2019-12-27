import {shallow} from 'enzyme';
import React from 'react';

import {CollectionsPreview} from './collections-preview.components';

let wrapper;
let mockMatch;
let mockHistory;
const mockRouteName = 'hats';

beforeEach(() => {
  mockMatch = {
    path: '/shop',
  };

  mockHistory = {
    push: jest.fn(),
  };

  const mockProps = {
    match: mockMatch,
    history: mockHistory,
    routeName: mockRouteName,
    title: 'hats',
    items: [],
  };

  wrapper = shallow(<CollectionsPreview {...mockProps} />);
});

it('should render CollectionPreview component', () => {
  expect(wrapper).toMatchSnapshot();
});
