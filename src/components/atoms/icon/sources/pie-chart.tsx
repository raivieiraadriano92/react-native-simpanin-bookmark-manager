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
        d="M7.221 5.354a7.53 7.53 0 019.851 1.08c.352.382.25.975-.174 1.276l-4.686 3.334a.941.941 0 01-1.244-.137L7.116 6.638m.105-1.284c-.426.298-.454.898-.105 1.284m.105-1.284a7.53 7.53 0 0111.817 5.62c.039.519-.41.92-.929.893l-6.19-.318a.941.941 0 01-.65-.309L7.115 6.638m11.943 4.891A7.53 7.53 0 114 11.53a7.53 7.53 0 0115.059 0z"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
      />
    </Svg>
  )
}
