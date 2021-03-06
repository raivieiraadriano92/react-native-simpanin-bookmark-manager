import React from 'react'

import { render } from 'test/utils'

import Flex from './index'

describe('<Flex />', () => {
  it('should render correctly', () => {
    const { toJSON, unmount } = render(<Flex />)

    expect(toJSON()).toMatchSnapshot()

    unmount()
  })
})
