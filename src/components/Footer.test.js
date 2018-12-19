import React from 'react';
import Footer from './Footer'
import {shallow} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Footer', () => {
  it('should render without crashing', () => {
    shallow(<Footer/>);
  });
})
