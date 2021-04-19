import React from 'react'
import '@testing-library/jest-dom'
import { AddCategory } from '../../components/AddCategory'
import { shallow } from 'enzyme'

describe('Test <AddCategory /> component', () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should show the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change the input box', () => {
    const input = wrapper.find('input');
    const value = 'Test';
    input.simulate('change', { target: { value } });
  });

  test('should not post the info with submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clean input box', () => {
    const value = 'Test';

    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(wrapper.find('input').prop('value')).toBe("");
  });
});
