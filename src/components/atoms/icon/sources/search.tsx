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
        d="M18.47 19.53a.75.75 0 101.06-1.06l-1.06 1.06zm-1.42-8.13a5.65 5.65 0 01-5.65 5.65v1.5a7.15 7.15 0 007.15-7.15h-1.5zm-5.65 5.65a5.65 5.65 0 01-5.65-5.65h-1.5a7.15 7.15 0 007.15 7.15v-1.5zM5.75 11.4a5.65 5.65 0 015.65-5.65v-1.5a7.15 7.15 0 00-7.15 7.15h1.5zm5.65-5.65a5.65 5.65 0 015.65 5.65h1.5a7.15 7.15 0 00-7.15-7.15v1.5zm4.07 10.78l3 3 1.06-1.06-3-3-1.06 1.06z"
        fill={hexToRgba(theme.colors[color], alpha)}
      />
    </Svg>
  )
}
