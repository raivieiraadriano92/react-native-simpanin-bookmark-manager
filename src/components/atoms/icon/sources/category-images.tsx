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
        d="M16.864 5.832a1.232 1.232 0 11-2.464 0 1.232 1.232 0 012.464 0z"
        fill="#fff"
      />
      <Path
        d="M8.864 7.387l-1.279 2.79a2.133 2.133 0 001.94 3.023h4.96c1.485 0 2.42-1.597 1.695-2.892l-.626-1.12a.911.911 0 00-1.401-.235.911.911 0 01-1.446-.329l-.496-1.182c-.616-1.468-2.684-1.502-3.347-.055z"
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
          <Stop stopColor="#92D5FF" />
          <Stop offset={1} stopColor="#7BCCFF" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={-4.37}
          y1={20.2}
          x2={17.348}
          y2={6.252}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#AADEFF" />
          <Stop offset={1} stopColor="#AADEFF" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={12}
          y1={3.6}
          x2={12}
          y2={13.2}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.8} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
