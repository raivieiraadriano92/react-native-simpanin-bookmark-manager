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
        d="M5.913 10.096A1.25 1.25 0 017.16 8.75h8.68c.728 0 1.302.62 1.247 1.346l-.55 7.153a3.25 3.25 0 01-3.241 3.001H9.704a3.25 3.25 0 01-3.24-3l-.55-7.154z"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
      />
      <Path
        d="M5.75 6.25h11.5"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.75 12a.75.75 0 00-1.5 0h1.5zm-1.5 5a.75.75 0 001.5 0h-1.5zm-1.5-5a.75.75 0 00-1.5 0h1.5zm-1.5 5a.75.75 0 001.5 0h-1.5zM14 6v.75h.75V6H14zM9 6h-.75v.75H9V6zm3.25 6v5h1.5v-5h-1.5zm-3 0v5h1.5v-5h-1.5zM10 4.75h3v-1.5h-3v1.5zm3.25.25v1h1.5V5h-1.5zm.75.25H9v1.5h5v-1.5zM9.75 6V5h-1.5v1h1.5zM13 4.75a.25.25 0 01.25.25h1.5A1.75 1.75 0 0013 3.25v1.5zm-3-1.5A1.75 1.75 0 008.25 5h1.5a.25.25 0 01.25-.25v-1.5z"
        fill={hexToRgba(theme.colors[color], alpha)}
      />
    </Svg>
  )
}
