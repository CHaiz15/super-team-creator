import React from 'react';
import { ErrorMessage } from './ErrorMessage.js';
import { shallow } from 'enzyme'

describe('ErrorMessage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ErrorMessage/>);
  })  
  it('should be an instance of the ErrorMessage component', () => {
      expect(wrapper).toMatchSnapshot();
  });
})
