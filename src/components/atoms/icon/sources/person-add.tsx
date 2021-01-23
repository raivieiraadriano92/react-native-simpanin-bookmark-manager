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
        d="M13.25 9a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
      />
      <Path
        d="M5 19c0-2 2.239-4 5-4s5 2 5 4"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.75 11a.75.75 0 00-1.5 0h1.5zm-1.5 4a.75.75 0 001.5 0h-1.5zM20 13.75a.75.75 0 000-1.5v1.5zm-4-1.5a.75.75 0 000 1.5v-1.5zM17.25 11v4h1.5v-4h-1.5zM20 12.25h-4v1.5h4v-1.5z"
        fill={hexToRgba(theme.colors[color], alpha)}
      />
    </Svg>
  )
}
