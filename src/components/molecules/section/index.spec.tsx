import React from 'react'

import { render } from 'test/utils'

import Section from './index'

describe('<Section />', () => {
  it('should render correctly', () => {
    const { toJSON, unmount } = render(<Section title="test" />)

    expect(toJSON()).toMatchSnapshot()

    unmount()
  })
})
