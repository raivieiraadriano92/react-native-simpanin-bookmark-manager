import React from 'react'

import { render } from 'test/utils'

import Line from './index'

describe('<Line />', () => {
  it('should render correctly', () => {
    const { toJSON, unmount } = render(<Line />)

    expect(toJSON()).toMatchSnapshot()

    unmount()
  })
})
