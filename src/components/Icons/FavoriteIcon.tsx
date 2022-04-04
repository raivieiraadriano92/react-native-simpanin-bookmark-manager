import { createIcon } from 'native-base'
import { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg'

export const FavoriteIcon = createIcon({
  viewBox: '0 0 30 29',
  path: [
    <G key={Math.random()} filter="url(#filter0_d_243_522)">
      <Path
        d="M3 5.33333C3 2.38782 5.38781 0 8.33333 0H21.6667C24.6122 0 27 2.38781 27 5.33333V18.6667C27 21.6122 24.6122 24 21.6667 24H8.33333C5.38782 24 3 21.6122 3 18.6667V5.33333Z"
        fill="url(#paint0_linear_243_522)"
      />
    </G>,
    <Path
      key={Math.random()}
      d="M5.1333 16C5.1333 14.2327 6.56599 12.8 8.3333 12.8H21.6666C23.4339 12.8 24.8666 14.2327 24.8666 16V18.6667C24.8666 20.434 23.4339 21.8667 21.6666 21.8667H10.4666C7.52112 21.8667 5.1333 19.4789 5.1333 16.5334V16Z"
      fill="url(#paint1_linear_243_522)"
    />,
    <Path
      key={Math.random()}
      d="M20.3627 7.61818C20.0795 7.31655 19.7433 7.07727 19.3732 6.91402C19.0031 6.75077 18.6065 6.66675 18.2059 6.66675C17.8053 6.66675 17.4086 6.75077 17.0386 6.91402C16.6685 7.07727 16.3323 7.31655 16.0491 7.61818L15.4614 8.24388L14.8736 7.61818C14.3016 7.00919 13.5258 6.66706 12.7168 6.66706C11.9079 6.66706 11.132 7.00919 10.56 7.61818C9.98798 8.22717 9.66663 9.05313 9.66663 9.91437C9.66663 10.7756 9.98798 11.6016 10.56 12.2106L15.4614 17.4287L20.3627 12.2106C20.646 11.9091 20.8708 11.5511 21.0241 11.1571C21.1774 10.7631 21.2564 10.3408 21.2564 9.91437C21.2564 9.4879 21.1774 9.06561 21.0241 8.67162C20.8708 8.27763 20.646 7.91967 20.3627 7.61818Z"
      fill="url(#paint2_linear_243_522)"
    />,
    <Defs key={Math.random()}>
      <LinearGradient
        id="paint0_linear_243_522"
        x1={5.13333}
        y1={0.8}
        x2={15}
        y2={24}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFA6A6" />
        <Stop offset={1} stopColor="#FF6969" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_243_522"
        x1={-6.8263}
        y1={26.9334}
        x2={22.1303}
        y2={8.33608}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFCECE" />
        <Stop offset={1} stopColor="#FF6A6A" stopOpacity={0.49} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_243_522"
        x1={15.4615}
        y1={6.66675}
        x2={15.4615}
        y2={17.4287}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="white" />
        <Stop offset={1} stopColor="white" stopOpacity={0.76} />
      </LinearGradient>
    </Defs>
  ]
})
