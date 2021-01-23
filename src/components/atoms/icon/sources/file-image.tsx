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
        d="M7 19h10a2 2 0 002-2v-7l-2.5-2.5L14 5H7a2 2 0 00-2 2v10a2 2 0 002 2z"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 10l-2.5-2.5L14 5v3a2 2 0 002 2h3z"
        stroke={hexToRgba(theme.colors[color], alpha)}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.696 15.288a.75.75 0 01-1.392.557l1.392-.557zm-3.292-1.253a.75.75 0 01-1.341-.67l1.341.67zm1.9 1.81l-1.04-2.599 1.393-.557 1.04 2.599-1.393.557zm-1.496-2.618l-.404.808-1.341-.67.404-.809 1.341.671zm.456.019a.25.25 0 00-.456-.019l-1.341-.67c.675-1.351 2.629-1.27 3.19.132l-1.393.557z"
        fill={hexToRgba(theme.colors[color], alpha)}
      />
      <Path
        d="M11.913 12.533a.75.75 0 11-1.426.468l1.426-.468zM14 14.817a.75.75 0 010 1.5v-1.5zm-6.458-.619l.697.277-.697-.277zm3.12-3.072l.712-.234-.712.234zm-1.88-.056l.697.276-.697-.276zM10.487 13l-.538-1.64 1.425-.468.539 1.64-1.426.469zM9.48 11.347l-1.24 3.129-1.394-.553 1.24-3.129 1.394.553zm-1.007 3.47H14v1.5H8.472v-1.5zm-.233-.341a.25.25 0 00.233.342v1.5a1.75 1.75 0 01-1.627-2.395l1.394.553zm1.71-3.115a.25.25 0 00-.47-.014l-1.394-.553c.603-1.522 2.779-1.456 3.29.1l-1.426.467z"
        fill={hexToRgba(theme.colors[color], alpha)}
      />
    </Svg>
  )
}
