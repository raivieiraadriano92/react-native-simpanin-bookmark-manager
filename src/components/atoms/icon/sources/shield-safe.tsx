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
        d="M14 11l-1.96 1.96a1 1 0 01-1.414 0L10 12.332m9-4.173v3.598a8 8 0 01-4.948 7.395l-1.289.532a2 2 0 01-1.526 0l-1.289-.532A8 8 0 015 11.758V8.16a2 2 0 011.566-1.953l.454-.1A12 12 0 009.851 5.09l1.243-.631a2 2 0 011.812 0l1.242.631c.898.456 1.85.797 2.832 1.016l.454.1A2 2 0 0119 8.16z"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
