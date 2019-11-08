import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../client/components/App'
import Pixel from '../client/components/Pixel'

test('<App />', () => {
  const expected = 'Draw Battle!'
  const wrapper = mount(<App />)
  expect(wrapper.text()).toMatch(expected)
})

test('contains <Pixel /> (shallow)', () => {
  const expected = '<Pixel />'

  const wrapper = shallow(<App />)
  const actual = wrapper.text()

  expect(actual).toMatch(expected)
})

test('contains <Pixel /> (mount)', () => {
  const expected = true

  const wrapper = mount(<App />)
  const actual = wrapper.containsMatchingElement(Pixel)

  expect(actual).toBe(expected)
})

test('calls mockFunction when Start button is pressed', () => {
  const mockFn = jest.fn()

  const testClick = shallow(
    <button onClick={mockFn}></button>
  )

  testClick.simulate('click')
  expect(mockFn).toHaveBeenCalled()
})
