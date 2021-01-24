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
        d="M8.25 11.816V6.184a1 1 0 011.479-.878l5.162 2.815a1 1 0 010 1.756l-5.162 2.815a1 1 0 01-1.479-.877z"
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
          <Stop stopColor="#9AA1FF" />
          <Stop offset={1} stopColor="#5460FE" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={-4.37}
          y1={20.2}
          x2={17.348}
          y2={6.252}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9DA4FF" />
          <Stop offset={1} stopColor="#99A0FF" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={12.375}
          y1={4.5}
          x2={12.375}
          y2={13.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FCFCFF" />
          <Stop offset={1} stopColor="#C0C5FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
