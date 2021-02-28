import React from 'react'
import Svg, { Circle } from 'react-native-svg'
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
    <Svg {...{ height, width }} viewBox="0 0 18 18" fill="none">
      <Circle
        cx={9}
        cy={9}
        r={8.25}
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
      />
    </Svg>
  )
}
