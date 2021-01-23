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
        d="M19 9l-7 3.5m0 0L5 9m7 3.5V20m-7-9.84v4.68a2 2 0 001.008 1.736l5 2.857a2 2 0 001.984 0l5-2.857A2 2 0 0019 14.839v-4.678a2 2 0 00-1.008-1.737l-5-2.857a2 2 0 00-1.984 0l-5 2.857A2 2 0 005 10.161z"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
      />
    </Svg>
  )
}
