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
        d="M19 10h.75v-.31l-.22-.22L19 10zm-5-5l.53-.53-.22-.22H14V5zm-4 8a.75.75 0 000-1.5V13zm-2-1.5A.75.75 0 008 13v-1.5zm3.5-1.5a.75.75 0 000-1.5V10zM8 8.5A.75.75 0 008 10V8.5zm6 7.5a.75.75 0 000-1.5V16zm-6-1.5A.75.75 0 008 16v-1.5zm9 3.75H7v1.5h10v-1.5zM5.75 17V7h-1.5v10h1.5zm12.5-7v7h1.5v-7h-1.5zM14 4.25H7v1.5h7v-1.5zm-7 14c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 007 19.75v-1.5zm10 1.5A2.75 2.75 0 0019.75 17h-1.5c0 .69-.56 1.25-1.25 1.25v1.5zM5.75 7c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 004.25 7h1.5zM19 9.25h-3v1.5h3v-1.5zM14.75 8V5h-1.5v3h1.5zM16 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0016 10.75v-1.5zm-6 2.25H8V13h2v-1.5zm1.5-3H8V10h3.5V8.5zm2.5 6H8V16h6v-1.5zm-.53-8.97l5 5 1.06-1.06-5-5-1.06 1.06z"
        fill={hexToRgba(theme.colors[color], alpha)}
      />
    </Svg>
  )
}
