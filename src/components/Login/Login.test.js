import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';
import Button from '../UI/Button/Button';

configure({ adapter: new Adapter() });

describe('Login Testing', () => {
  it('should have 2 buttons ', () => {
    const wrapper = shallow(<Login/>)
    expect(wrapper.find(Button)).toHaveLength(2);
  })
})