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
    <Svg {...{ height, width }} viewBox="0 0 25 25" fill="none">
      <Path
        d="M20.702 12.34H4.66m8.02-8.02v16.042"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
