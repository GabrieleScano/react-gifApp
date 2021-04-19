import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Test <GifGrid /> component', () => {
    const category = 'Test'
    test('should show the component', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
      });
    
    test('should show items when loaded', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        })


        const wrapper = shallow(<GifGrid category={category}/>)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
    })
    
    
})
