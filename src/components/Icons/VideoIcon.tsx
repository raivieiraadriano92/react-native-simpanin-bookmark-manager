import { createIcon } from 'native-base'
import { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg'

export const VideoIcon = createIcon({
  viewBox: '0 0 30 29',
  path: [
    <G key={Math.random()} filter="url(#filter0_d_243_518)">
      <Path
        d="M3 5.33333C3 2.38782 5.38781 0 8.33333 0H21.6667C24.6122 0 27 2.38781 27 5.33333V18.6667C27 21.6122 24.6122 24 21.6667 24H8.33333C5.38782 24 3 21.6122 3 18.6667V5.33333Z"
        fill="url(#paint0_linear_243_518)"
      />
    </G>,
    <Path
      key={Math.random()}
      d="M5.1333 16C5.1333 14.2327 6.56599 12.8 8.3333 12.8H21.6666C23.4339 12.8 24.8666 14.2327 24.8666 16V18.6667C24.8666 20.434 23.4339 21.8667 21.6666 21.8667H10.4666C7.52112 21.8667 5.1333 19.4789 5.1333 16.5334V16Z"
      fill="url(#paint1_linear_243_518)"
    />,
    <Path
      key={Math.random()}
      d="M10 16.3155V7.68454C10 6.92548 10.8125 6.44317 11.4789 6.80665L19.3905 11.1221C20.0854 11.5011 20.0854 12.4989 19.3905 12.8779L11.4789 17.1934C10.8125 17.5568 10 17.0745 10 16.3155Z"
      fill="url(#paint2_linear_243_518)"
    />,
    <Defs key={Math.random()}>
      <LinearGradient
        id="paint0_linear_243_518"
        x1={5.13333}
        y1={0.8}
        x2={15}
        y2={24}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#9AA1FF" />
        <Stop offset={1} stopColor="#5460FE" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_243_518"
        x1={-6.8263}
        y1={26.9334}
        x2={22.1303}
        y2={8.33608}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#9DA4FF" />
        <Stop offset={1} stopColor="#99A0FF" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_243_518"
        x1={15.5}
        y1={6}
        x2={15.5}
        y2={18}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FCFCFF" />
        <Stop offset={1} stopColor="#C0C5FF" />
      </LinearGradient>
    </Defs>
  ]
})
