import React from 'react'
import  GifApp  from '../GifApp'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

describe('Test <GifApp /> component', () => {

    test('should show the component', () => {
        const wrapper = shallow(<GifApp />)
        expect(wrapper).toMatchSnapshot()
      });

      test('should show a list of categories', () => {
          const categories = ['one', 'two']
          const wrapper = shallow(<GifApp defaultCategories={categories}/>)
          expect(wrapper).toMatchSnapshot()
          expect(wrapper.find('GifGrid').length).toBe(categories.length)
          
      })
      
    
})

