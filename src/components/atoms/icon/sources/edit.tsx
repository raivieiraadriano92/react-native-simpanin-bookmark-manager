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
        d="M13 5.75a.75.75 0 000-1.5v1.5zM19.75 11a.75.75 0 00-1.5 0h1.5zm-4.783.467v.75h.339l.224-.254-.563-.496zM13 9.5l-.563-.496-.187.213V9.5H13zm0 1.967h-.75v.75H13v-.75zm5.893-5.876l-.53.53.53-.53zm.043 1.368l-.562-.496.563.496zm-.593-1.918l.53-.53-.53.53zm-1.457.046l.562.496-.562-.496zM17 18.25H7v1.5h10v-1.5zM5.75 17V7h-1.5v10h1.5zM13 4.25H7v1.5h6v-1.5zM18.25 11v6h1.5v-6h-1.5zM7 18.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 007 19.75v-1.5zm10 1.5A2.75 2.75 0 0019.75 17h-1.5c0 .69-.56 1.25-1.25 1.25v1.5zM5.75 7c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 004.25 7h1.5zM17.813 5.57l.55.55 1.06-1.06-.55-.55-1.06 1.06zm.56.892l-3.969 4.508 1.126.992 3.97-4.508-1.126-.992zm-4.81 3.533l3.885-4.413-1.125-.991-3.886 4.412 1.126.992zm1.404.721H13v1.5h1.967v-1.5zm-1.217.75V9.5h-1.5v1.967h1.5zm4.613-5.346a.25.25 0 01.01.342l1.126.992a1.75 1.75 0 00-.075-2.394l-1.061 1.06zm.51-1.61a1.75 1.75 0 00-2.55.08l1.125.992a.25.25 0 01.365-.012l1.06-1.06z"
        fill={hexToRgba(theme.colors[color], alpha)}
      />
    </Svg>
  )
}
