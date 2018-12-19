import React from 'react';
import FormListings from './components/SideBar'
import {shallow, mount} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('FormListings', () => {
  it('should render without crashing', () => {
    shallow(<FormListings/>);
  });
})

it('calls onClickMockHandler event on form submit', () => {
  const onClickMockHandler = jest.fn();
  const props = {
        handleSubmit: onClickMockHandler
    }
  let wrapper = mount(<FormListings {...props}/>);
  wrapper.find('#submit').simulate('click');
  expect(onClickMockHandler).toHaveBeenCalled();

});
