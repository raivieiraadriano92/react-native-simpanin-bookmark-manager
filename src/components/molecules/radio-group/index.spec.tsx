import React from 'react'

import { render } from 'test/utils'

import RadioGroup from './index'

describe('<RadioGroup />', () => {
  it('should render correctly', () => {
    const { toJSON, unmount } = render(
      <RadioGroup
        onChange={() => {
          //
        }}
        options={[{ label: 'test', value: 0 }]}
        value={0}
      />
    )

    expect(toJSON()).toMatchSnapshot()

    unmount()
  })
})
