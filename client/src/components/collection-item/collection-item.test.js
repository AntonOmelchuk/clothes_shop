import React from 'react';
import {shallow, render} from 'enzyme';
import {CollectionItem} from './collection-item.component';

describe('CollectionItem component', () => {
  let wrapper;
  let mockProps;
  let mockAddItem;
  const imageUrl = 'www.test.com';
  const mockName = 'test name';
  const mockPrice = 21;

  beforeEach(() => {
    mockAddItem = jest.fn();

    mockProps = {
      item: {
        imageUrl: imageUrl,
        price: mockPrice,
        name: mockName,
      },
      addItem: mockAddItem,
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it('renders CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
