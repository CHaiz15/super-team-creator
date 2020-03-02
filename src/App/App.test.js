import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

describe('App', () => {
  it('should be an instance of the App component', () => {
    const wrapper = shallow(<App/>);
      expect(wrapper).toMatchSnapshot();
  });
})
