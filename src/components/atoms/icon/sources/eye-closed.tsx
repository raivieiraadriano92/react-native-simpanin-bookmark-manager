import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
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
        d="M19 12c0 1-3 5-7 5s-7-4-7-5 3-5 7-5 7 4 7 5z"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
      />
      <Circle
        cx={12}
        cy={12}
        r={2}
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
      />
      <Path
        d="M17 7L7 17"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
