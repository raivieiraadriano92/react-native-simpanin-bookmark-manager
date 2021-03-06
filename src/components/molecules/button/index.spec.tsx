import React from 'react'

import { render } from 'test/utils'

import Button from './index'

describe('<Button />', () => {
  it('should render correctly', () => {
    const { toJSON, unmount } = render(<Button />)

    expect(toJSON()).toMatchSnapshot()

    unmount()
  })
})
