import { createIcon } from 'native-base'
import { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg'

export const LinkIcon = createIcon({
  viewBox: '0 0 30 29',
  path: [
    <G key={Math.random()} filter="url(#filter0_d_243_502)">
      <Path
        d="M3 5.33333C3 2.38782 5.38781 0 8.33333 0H17.0575C18.472 0 19.8286 0.561903 20.8288 1.5621L25.4379 6.17124C26.4381 7.17143 27 8.52798 27 9.94247V18.6667C27 21.6122 24.6122 24 21.6667 24H8.33333C5.38782 24 3 21.6122 3 18.6667V5.33333Z"
        fill="url(#paint0_linear_243_502)"
      />
    </G>,
    <Path
      key={Math.random()}
      d="M5.13342 16C5.13342 14.2327 6.56611 12.8 8.33342 12.8H21.6668C23.4341 12.8 24.8668 14.2327 24.8668 16V18.6667C24.8668 20.434 23.4341 21.8667 21.6668 21.8667H10.4668C7.52124 21.8667 5.13342 19.4789 5.13342 16.5334V16Z"
      fill="url(#paint1_linear_243_502)"
    />,
    <Path
      key={Math.random()}
      d="M17.9334 10.2094V7.92371C17.9334 7.08214 17.2171 6.3999 16.3334 6.3999H13.1334C12.2498 6.3999 11.5334 7.08214 11.5334 7.92371V10.2094M11.5334 13.257L11.5334 15.5428C11.5334 16.3843 12.2498 17.0666 13.1334 17.0666L16.3334 17.0666C17.2171 17.0666 17.9334 16.3843 17.9334 15.5428V13.257M14.7334 9.44752L14.7334 14.0189"
      stroke="url(#paint2_linear_243_502)"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Defs key={Math.random()}>
      <LinearGradient
        id="paint0_linear_243_502"
        x1={5.13333}
        y1={0.8}
        x2={15}
        y2={24}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CC9CFF" />
        <Stop offset={1} stopColor="#BF84FF" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_243_502"
        x1={-6.82617}
        y1={26.9334}
        x2={22.1304}
        y2={8.33609}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D5ADFF" />
        <Stop offset={1} stopColor="#D5ADFF" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_243_502"
        x1={14.7334}
        y1={6.3999}
        x2={14.7334}
        y2={17.0666}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="white" />
        <Stop offset={1} stopColor="white" stopOpacity={0.8} />
      </LinearGradient>
    </Defs>
  ]
})
