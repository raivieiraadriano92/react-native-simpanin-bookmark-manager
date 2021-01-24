import React from 'react'
import Svg, { G, Path, Defs, LinearGradient, Stop } from 'react-native-svg'

import { resize } from 'src/utils'

import { Props } from '..'

export default function ({ size = 24 }: Pick<Props, 'size'>): JSX.Element {
  const { height, width } = resize({ height: 23, size, width: 24 })

  return (
    <Svg {...{ height, width }} viewBox="0 0 24 23" fill="none">
      <G>
        <Path
          d="M3 5.333A5.333 5.333 0 018.333 0h7.334A5.333 5.333 0 0121 5.333v7.334A5.333 5.333 0 0115.667 18H8.333A5.333 5.333 0 013 12.667V5.333z"
          fill="url(#prefix__paint0_linear)"
        />
      </G>
      <Path
        d="M4.6 12.15A2.55 2.55 0 017.15 9.6h9.05a3.2 3.2 0 013.2 3.2v.4a3.2 3.2 0 01-3.2 3.2H8.85a4.25 4.25 0 01-4.25-4.25z"
        fill="url(#prefix__paint1_linear)"
      />
      <Path
        d="M16.022 5.714a2.282 2.282 0 00-.742-.529 2.167 2.167 0 00-1.751 0c-.278.123-.53.302-.742.529l-.441.469-.44-.47A2.22 2.22 0 0010.287 5a2.22 2.22 0 00-1.618.714A2.518 2.518 0 008 7.436c0 .646.241 1.265.67 1.722l3.676 3.913 3.676-3.913a2.45 2.45 0 00.496-.79 2.572 2.572 0 000-1.864 2.45 2.45 0 00-.496-.79z"
        fill="url(#prefix__paint2_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={4.6}
          y1={0.6}
          x2={12}
          y2={18}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFA6A6" />
          <Stop offset={1} stopColor="#FF6969" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={-4.37}
          y1={20.2}
          x2={17.348}
          y2={6.252}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFCECE" />
          <Stop offset={1} stopColor="#FF6A6A" stopOpacity={0.49} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={12.346}
          y1={5}
          x2={12.346}
          y2={13.071}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.76} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
