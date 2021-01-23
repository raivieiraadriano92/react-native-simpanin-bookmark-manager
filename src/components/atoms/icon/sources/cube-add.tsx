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
        d="M19 11.5v-1.34a2 2 0 00-1.008-1.736l-5-2.857a2 2 0 00-1.984 0l-5 2.857A2 2 0 005 10.161v4.678a2 2 0 001.008 1.737l5 2.857a2 2 0 001.984 0L15.5 18"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 9l-7 3.5"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
      />
      <Path
        d="M19.75 14a.75.75 0 00-1.5 0h1.5zm-1.5 4a.75.75 0 001.5 0h-1.5zm0-4v4h1.5v-4h-1.5z"
        fill={hexToRgba(theme.colors[color], alpha)}
      />
      <Path
        d="M21 16.75a.75.75 0 000-1.5v1.5zm-4-1.5a.75.75 0 000 1.5v-1.5zm4 0h-4v1.5h4v-1.5z"
        fill={hexToRgba(theme.colors[color], alpha)}
      />
      <Path
        d="M5 9l7 3.5M12 20v-7.5"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
      />
    </Svg>
  )
}
