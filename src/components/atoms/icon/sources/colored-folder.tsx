import React from 'react'
import Svg, { G, Path, Defs, LinearGradient, Stop } from 'react-native-svg'

import { resize } from 'src/utils'

import { Props } from '..'

export default function ({ size = 24 }: Pick<Props, 'size'>): JSX.Element {
  const { height, width } = resize({ height: 53, size, width: 53 })

  return (
    <Svg {...{ height, width }} viewBox="0 0 53 53" fill="none">
      <G>
        <Path
          d="M4 10C4 4.477 8.477 0 14 0h11c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H14C8.477 45 4 40.523 4 35V10z"
          fill="url(#prefix__paint0_linear)"
          fillOpacity={0.4}
        />
        <Path
          d="M4 18C4 12.477 8.477 8 14 8h25c5.523 0 10 4.477 10 10v17c0 5.523-4.477 10-10 10H14C8.477 45 4 40.523 4 35V18z"
          fill="url(#prefix__paint1_linear)"
        />
        <Path
          d="M8 30a6 6 0 016-6h25a6 6 0 016 6v5a6 6 0 01-6 6H18c-5.523 0-10-4.477-10-10v-1z"
          fill="url(#prefix__paint2_linear)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={-2.2}
          y1={-4.257}
          x2={52.239}
          y2={35.204}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFCB5D" />
          <Stop offset={1} stopColor="#FFB645" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={-5}
          y1={4.5}
          x2={40.701}
          y2={62.985}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFD680" />
          <Stop offset={1} stopColor="#FFC060" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={-8}
          y1={24}
          x2={13.975}
          y2={63.531}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFEBC6" />
          <Stop offset={1} stopColor="#FFC252" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
