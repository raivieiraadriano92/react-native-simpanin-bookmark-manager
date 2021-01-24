import React from 'react'
import Svg, { Circle } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

import { hexToRgba, resize } from 'src/utils'

import { Props } from '..'

export default function ({
  alpha = 1,
  color = 'text',
  size = 3
}: Props): JSX.Element {
  const { height, width } = resize({ height: 3, size, width: 3 })

  const theme = useTheme()

  return (
    <Svg {...{ height, width }} viewBox="0 0 3 3" fill="none">
      <Circle
        cx={1.5}
        cy={1.5}
        r={1.5}
        fill={hexToRgba(theme.colors[color], alpha)}
      />
    </Svg>
  )
}
