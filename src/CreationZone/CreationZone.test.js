import React from 'react';
import { CreationZone } from './CreationZone';
import { shallow } from 'enzyme'

describe('CreationZone', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CreationZone/>);
  })  
  it('should be an instance of the CreationZone component', () => {
      expect(wrapper).toMatchSnapshot();
  });
})
