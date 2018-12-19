import React from 'react';
import SearchAppBar from './Navbar'
import {shallow, mount} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('SearchAppBar', () => {
  it('should render without crashing', () => {
    shallow(<SearchAppBar/>);
  });
})
