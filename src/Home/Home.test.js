import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme'

describe('Home', () => {
  it('should be an instance of the Home component', () => {
    const wrapper = shallow(<Home/>);
      expect(wrapper).toMatchSnapshot();
  });
})
