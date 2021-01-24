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
          d="M3 5.333A5.333 5.333 0 018.333 0h4.658c1.414 0 2.77.562 3.771 1.562l2.676 2.676c1 1 1.562 2.357 1.562 3.771v4.658A5.333 5.333 0 0115.667 18H8.333A5.333 5.333 0 013 12.667V5.333z"
          fill="url(#prefix__paint0_linear)"
        />
      </G>
      <Path
        d="M4.6 12.15A2.55 2.55 0 017.15 9.6h9.05a3.2 3.2 0 013.2 3.2v.4a3.2 3.2 0 01-3.2 3.2H8.85a4.25 4.25 0 01-4.25-4.25z"
        fill="url(#prefix__paint1_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6.85a.75.75 0 01.75-.75h7.3a.75.75 0 010 1.5h-7.3A.75.75 0 017 6.85zm0 3.2a.75.75 0 01.75-.75h7.3a.75.75 0 010 1.5h-7.3a.75.75 0 01-.75-.75zm.75 2.45a.75.75 0 000 1.5h4.9a.75.75 0 100-1.5h-4.9z"
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
          <Stop stopColor="#FFD1DA" />
          <Stop offset={1} stopColor="#FFB8C5" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={-4.37}
          y1={20.2}
          x2={17.348}
          y2={6.252}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFE5EA" stopOpacity={0.69} />
          <Stop offset={1} stopColor="#FFE5EA" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={10.6}
          y1={6.1}
          x2={10.6}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.8} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
