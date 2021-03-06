import React from 'react'

import { render } from 'test/utils'

import Text from './index'

describe('<Text />', () => {
  it('should render correctly', () => {
    const { toJSON, unmount } = render(<Text type="h1" />)

    expect(toJSON()).toMatchSnapshot()

    unmount()
  })
})
