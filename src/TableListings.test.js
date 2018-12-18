import React from 'react';
import TableListings from './TableListings'
import {shallow, mount} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('TableListings', () => {
  it('should render without crashing', () => {
    shallow(<TableListings/>);
  });
})
