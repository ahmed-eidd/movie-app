import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Nav from './Nav';
import NavItem from './NavItem/NavItem';

configure({ adapter: new Adapter() });

describe('Nav Testing', () => {
  it('should have 6 NavItems ', () => {
    const wrapper = shallow(<Nav/>)
    expect(wrapper.find(NavItem)).toHaveLength(6);
  })
})