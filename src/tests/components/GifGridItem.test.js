import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Test <GifGridItem /> component', () => {
  const title = 'Title'
  const url = 'https://localhost/algo.jpg'
  const wrapper = shallow(<GifGridItem title={title} url={url} />)

  test('should show the component', () => {
    expect(wrapper).toMatchSnapshot()
  });

  test('should have a p with the title', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(title)
  });
  test('the image should have the props url and alt', () => {
    const img = wrapper.find('img')
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  });
  test('should have class animate__fadeIn', () => {
    const div = wrapper.find('div')
    const className = div.prop('className')
    expect(className.includes('animate__fadeIn')).toBe(true)
  });
});
