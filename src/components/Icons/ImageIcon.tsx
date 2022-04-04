import { createIcon } from 'native-base'
import { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg'

export const ImageIcon = createIcon({
  viewBox: '0 0 30 29',
  path: [
    <G key={Math.random()} filter="url(#filter0_d_243_506)">
      <Path
        key={Math.random()}
        d="M3 5.33333C3 2.38782 5.38781 0 8.33333 0H21.6667C24.6122 0 27 2.38781 27 5.33333V18.6667C27 21.6122 24.6122 24 21.6667 24H8.33333C5.38782 24 3 21.6122 3 18.6667V5.33333Z"
        fill="url(#paint0_linear_243_506)"
      />
    </G>,
    <Path
      key={Math.random()}
      d="M5.1333 16C5.1333 14.2327 6.56599 12.8 8.3333 12.8H21.6666C23.4339 12.8 24.8666 14.2327 24.8666 16V18.6667C24.8666 20.434 23.4339 21.8667 21.6666 21.8667H10.4666C7.52112 21.8667 5.1333 19.4789 5.1333 16.5334V16Z"
      fill="url(#paint1_linear_243_506)"
    />,
    <Path
      key={Math.random()}
      d="M21.4858 7.77618C21.4858 8.68351 20.7503 9.41905 19.8429 9.41905C18.9356 9.41905 18.2001 8.68351 18.2001 7.77618C18.2001 6.86884 18.9356 6.1333 19.8429 6.1333C20.7503 6.1333 21.4858 6.86884 21.4858 7.77618Z"
      fill="white"
    />,
    <Path
      key={Math.random()}
      d="M11.1072 9.22065L8.65178 14.5779C8.00411 15.9909 9.03667 17.6 10.5911 17.6H19.0935C20.7234 17.6 21.7512 15.8464 20.9549 14.4244L19.7382 12.2518C19.359 11.5745 18.4507 11.4216 17.8706 11.9373C17.2476 12.491 16.2648 12.2676 15.9425 11.499L15.0138 9.2845C14.2952 7.57082 11.8814 7.53137 11.1072 9.22065Z"
      fill="url(#paint2_linear_243_506)"
    />,
    <Defs key={Math.random()}>
      <LinearGradient
        id="paint0_linear_243_506"
        x1={5.13333}
        y1={0.8}
        x2={15}
        y2={24}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#92D5FF" />
        <Stop offset={1} stopColor="#7BCCFF" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_243_506"
        x1={-6.8263}
        y1={26.9334}
        x2={22.1303}
        y2={8.33608}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#AADEFF" />
        <Stop offset={1} stopColor="#AADEFF" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_243_506"
        x1={14.9999}
        y1={4.80005}
        x2={14.9999}
        y2={17.6}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="white" />
        <Stop offset={1} stopColor="white" stopOpacity={0.8} />
      </LinearGradient>
    </Defs>
  ]
})
