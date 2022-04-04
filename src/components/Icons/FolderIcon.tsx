import { createIcon } from 'native-base'
import { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg'

export const FolderIcon = createIcon({
  viewBox: '0 0 30 29',
  path: [
    <G key={Math.random()} filter="url(#filter0_d_243_526)">
      <Path
        d="M2 4.88889C2 2.18883 4.18883 0 6.88889 0H13.6444C16.3445 0 18.5333 2.18883 18.5333 4.88889V19.1111C18.5333 21.8112 16.3445 24 13.6444 24H6.88889C4.18883 24 2 21.8112 2 19.1111V4.88889Z"
        fill="url(#paint0_linear_243_526)"
        fillOpacity={0.4}
      />
      <Path
        d="M2 9.15549C2 6.45543 4.18883 4.2666 6.88889 4.2666H21.1111C23.8112 4.2666 26 6.45543 26 9.15549V19.111C26 21.8111 23.8112 23.9999 21.1111 23.9999H6.88889C4.18883 23.9999 2 21.8111 2 19.111V9.15549Z"
        fill="url(#paint1_linear_243_526)"
      />
      <Path
        d="M4.1333 15.7334C4.1333 14.1133 5.4466 12.8 7.06663 12.8H20.9333C22.5533 12.8 23.8666 14.1133 23.8666 15.7334V18.9334C23.8666 20.5534 22.5533 21.8667 20.9333 21.8667H9.02219C6.32213 21.8667 4.1333 19.6779 4.1333 16.9778V15.7334Z"
        fill="url(#paint2_linear_243_526)"
      />
    </G>,
    <Defs key={Math.random()}>
      <LinearGradient
        id="paint0_linear_243_526"
        x1={-1.30667}
        y1={-2.27027}
        x2={27.7275}
        y2={18.7754}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFCB5D" />
        <Stop offset={1} stopColor="#FFB645" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_243_526"
        x1={-2.8}
        y1={2.39994}
        x2={21.574}
        y2={33.5918}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFD680" />
        <Stop offset={1} stopColor="#FFC060" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_243_526"
        x1={-4.40003}
        y1={12.8}
        x2={7.31996}
        y2={33.883}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFEBC6" />
        <Stop offset={1} stopColor="#FFC252" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  ]
})
