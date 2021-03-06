import React from 'react'

import { render } from 'test/utils'

import Input from './index'

describe('<Input />', () => {
  it('should render correctly', () => {
    const { toJSON, unmount } = render(<Input />)

    expect(toJSON()).toMatchSnapshot()

    unmount()
  })
})
