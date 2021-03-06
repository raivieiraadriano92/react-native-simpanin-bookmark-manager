import React from 'react'

import { render } from 'test/utils'

import Avatar from './index'

describe('<Avatar />', () => {
  it('should render correctly', () => {
    const { toJSON, unmount } = render(<Avatar source={0} />)

    expect(toJSON()).toMatchSnapshot()

    unmount()
  })
})
