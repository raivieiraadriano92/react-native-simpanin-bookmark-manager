import React from 'react'

import { render } from 'test/utils'

import ListItem from './index'

describe('<ListItem />', () => {
  it('should render correctly', () => {
    const { toJSON, unmount } = render(
      <ListItem
        index={0}
        onPress={() => {
          //
        }}
        title="test"
      />
    )

    expect(toJSON()).toMatchSnapshot()

    unmount()
  })
})
