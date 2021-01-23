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
        d="M9.864 7.47a.75.75 0 00-1.061 1.06l1.06-1.06zm3.193 4.254l-.53.53.53-.53zm0 1.886l-.53-.53.53.53zm-4.254 3.193a.75.75 0 001.06 1.06l-1.06-1.06zm0-8.273l3.724 3.724 1.06-1.06L9.865 7.47 8.803 8.53zm3.724 4.55l-3.724 3.723 1.06 1.06 3.725-3.723-1.061-1.06zm0-.826a.583.583 0 010 .825l1.06 1.06a2.083 2.083 0 000-2.945l-1.06 1.06z"
        fill={hexToRgba(theme.colors[color], alpha)}
      />
    </Svg>
  )
}
