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
        d="M15.69 12.288a3.173 3.173 0 110 6.345H6.703a3.701 3.701 0 01-.53-7.365v-.038a4.23 4.23 0 118.251 1.321c.388-.17.817-.263 1.268-.263zm0 0A3.172 3.172 0 0012.875 14M21 6l-1.96 1.96a1 1 0 01-1.414 0L17 7.333"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
