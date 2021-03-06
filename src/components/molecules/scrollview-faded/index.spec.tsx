import React from 'react'

import { render } from 'test/utils'

import ScrollViewFaded from './index'

describe('<ScrollViewFaded />', () => {
  it('should render correctly', () => {
    const { toJSON, unmount } = render(
      <ScrollViewFaded
        colors={{
          bottom: ['#000'],
          top: ['#000']
        }}
      />
    )

    expect(toJSON()).toMatchSnapshot()

    unmount()
  })
})
