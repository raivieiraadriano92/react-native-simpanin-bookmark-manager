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
        d="M5 7.154C5 5.964 5.964 5 7.154 5H8.23c1.19 0 2.154.964 2.154 2.154V8.23c0 1.19-.965 2.154-2.154 2.154H7.154A2.154 2.154 0 015 8.23V7.154zM13.615 7.154c0-1.19.965-2.154 2.154-2.154h1.077C18.036 5 19 5.964 19 7.154V8.23c0 1.19-.964 2.154-2.154 2.154H15.77a2.154 2.154 0 01-2.154-2.154V7.154zM5 15.77c0-1.19.964-2.155 2.154-2.155H8.23c1.19 0 2.154.965 2.154 2.154v1.077c0 1.19-.965 2.154-2.154 2.154H7.154A2.154 2.154 0 015 16.846V15.77zM13.615 15.77c0-1.19.965-2.155 2.154-2.155h1.077c1.19 0 2.154.965 2.154 2.154v1.077c0 1.19-.964 2.154-2.154 2.154H15.77a2.154 2.154 0 01-2.154-2.154V15.77z"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
      />
    </Svg>
  )
}
