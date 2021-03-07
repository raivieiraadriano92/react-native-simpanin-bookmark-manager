import React from 'react'
import Svg, { Mask, Path } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

import { hexToRgba, resize } from 'src/utils'

import { Props } from '..'

export default function ({
  alpha = 1,
  color = 'text',
  size = 24
}: Props): JSX.Element {
  const { height, width } = resize({ height: 24, size, width: 24 })

  const theme = useTheme()

  return (
    <Svg {...{ height, width }} viewBox="0 0 24 24" fill="none">
      <Mask id="prefix__a" fill="#fff">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.06 12.674a7.047 7.047 0 01-9.023-6.768c0-.66.091-1.3.26-1.906A7.584 7.584 0 004 11.476c0 4.189 3.392 7.584 7.577 7.584 3.778 0 6.91-2.767 7.483-6.386z"
        />
      </Mask>
      <Path
        d="M19.06 12.674l1.482.235.37-2.34-2.273.665.421 1.44zM10.298 4l1.444.404.639-2.28-2.335.397L10.298 4zm8.341 7.234a5.54 5.54 0 01-1.558.222v3c.831 0 1.637-.12 2.4-.342l-.842-2.88zm-1.558.222a5.547 5.547 0 01-5.543-5.55h-3c0 4.72 3.823 8.55 8.543 8.55v-3zm-5.543-5.55c0-.523.071-1.026.204-1.502l-2.889-.808a8.562 8.562 0 00-.316 2.31h3zM5.5 11.476c0-3.01 2.184-5.51 5.05-5.997l-.504-2.958A9.084 9.084 0 002.5 11.476h3zm6.077 6.084A6.08 6.08 0 015.5 11.476h-3c0 5.016 4.063 9.084 9.077 9.084v-3zm6.002-5.121a6.081 6.081 0 01-6.002 5.121v3c4.528 0 8.277-3.316 8.965-7.651l-2.963-.47z"
        fill={hexToRgba(theme.colors[color], alpha)}
        mask="url(#prefix__a)"
      />
    </Svg>
  )
}
