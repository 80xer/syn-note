import React from 'react'
import { shallow } from 'enzyme'

import SynNote from './SynNote'

describe('<SynNote />', () => {
  it('should render', () => {
    const wrapper = shallow(<SynNote />)

    expect(wrapper).toBeDefined()
  })

  it('should call onClick', () => {
    const props = {
      onClick: jest.fn(),
    }
    const wrapper = shallow(<SynNote {...props} />)
    wrapper.simulate('click')

    expect(props.onClick).toHaveBeenCalled()
  })

  it('should be disableable', () => {
    const wrapper = shallow(<SynNote disabled />)

    expect(wrapper.prop('disabled')).toBe(true)
  })

  it('should allow custom className', () => {
    const props = {
      className: 'Custom',
    }
    const wrapper = shallow(<SynNote {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })
})
