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
        d="M10.75 11a.75.75 0 00-1.5 0h1.5zm-1.5 4a.75.75 0 001.5 0h-1.5zm0-4v4h1.5v-4h-1.5z"
        fill={hexToRgba(theme.colors[color], alpha)}
      />
      <Path
        d="M12 13.75a.75.75 0 000-1.5v1.5zm-4-1.5a.75.75 0 000 1.5v-1.5zm4 0H8v1.5h4v-1.5z"
        fill={hexToRgba(theme.colors[color], alpha)}
      />
    </Svg>
  )
}
