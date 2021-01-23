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
        d="M11.414 6.414l.53-.53-.53.53zm-.828-.828l-.53.53.53-.53zm.884 7.944a.75.75 0 101.06-1.06l-1.06 1.06zm-.763-1.823l-.53.53.53-.53zm-1.414 0l.53.53-.53-.53zm-1.823.763a.75.75 0 101.06 1.06l-1.06-1.06zm3.28-.97a.75.75 0 00-1.5 0h1.5zm-1.5 3.75a.75.75 0 001.5 0h-1.5zm9-6.25v8h1.5V9h-1.5zM17 18.25H7v1.5h10v-1.5zM5.75 17V7h-1.5v10h1.5zM7 5.75h2.172v-1.5H7v1.5zm3.056.366l.828.829 1.06-1.061-.828-.829-1.06 1.061zm2.772 1.634H17v-1.5h-4.172v1.5zm-1.944-.805a2.75 2.75 0 001.944.805v-1.5a1.25 1.25 0 01-.883-.366l-1.061 1.06zM9.172 5.75c.331 0 .649.132.883.366l1.061-1.06a2.75 2.75 0 00-1.944-.806v1.5zM7 18.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 007 19.75v-1.5zM18.25 17c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0019.75 17h-1.5zm1.5-8A2.75 2.75 0 0017 6.25v1.5c.69 0 1.25.56 1.25 1.25h1.5zm-14-2c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 004.25 7h1.5zm6.78 5.47l-1.293-1.293-1.06 1.06 1.293 1.293 1.06-1.06zm-3.767-1.293L7.47 12.47l1.06 1.06 1.293-1.293-1.06-1.06zm2.474 0a1.75 1.75 0 00-2.474 0l1.06 1.06a.25.25 0 01.354 0l1.06-1.06zM9.25 11.5v3.75h1.5V11.5h-1.5z"
        fill={hexToRgba(theme.colors[color], alpha)}
      />
    </Svg>
  )
}
