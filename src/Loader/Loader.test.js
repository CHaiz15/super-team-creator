import React from 'react';
import { Loader } from './Loader';
import { shallow } from 'enzyme'

describe('Loader', () => {
  it('should be an instance of the Loader component', () => {
    const wrapper = shallow(<Loader/>);
      expect(wrapper).toMatchSnapshot();
  });
})
