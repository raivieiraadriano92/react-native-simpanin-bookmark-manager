import React from 'react'
import Svg, { Path } from 'react-native-svg'
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
      <Path
        d="M5 7a2 2 0 012-2h2.172a2 2 0 011.414.586l.828.828A2 2 0 0012.828 7H17a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V7z"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 15.333v-1.666a.667.667 0 00-.667-.667H9.667a.667.667 0 00-.667.667v1.666c0 .368.298.667.667.667h4.666a.667.667 0 00.667-.667zM14 13v-1a2 2 0 10-4 0v1h4z"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
