import { createIcon } from 'native-base'
import { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg'

export const DocumentIcon = createIcon({
  viewBox: '0 0 30 29',
  path: [
    <G key={Math.random()} filter="url(#filter0_d_243_511)">
      <Path
        d="M3 5.33333C3 2.38782 5.38781 0 8.33333 0H17.0575C18.472 0 19.8286 0.561903 20.8288 1.5621L25.4379 6.17124C26.4381 7.17143 27 8.52798 27 9.94247V18.6667C27 21.6122 24.6122 24 21.6667 24H8.33333C5.38782 24 3 21.6122 3 18.6667V5.33333Z"
        fill="url(#paint0_linear_243_511)"
      />
    </G>,
    <Path
      key={Math.random()}
      d="M5.1333 16C5.1333 14.2327 6.56599 12.8 8.3333 12.8H21.6666C23.4339 12.8 24.8666 14.2327 24.8666 16V18.6667C24.8666 20.434 23.4339 21.8667 21.6666 21.8667H10.4666C7.52112 21.8667 5.1333 19.4789 5.1333 16.5334V16Z"
      fill="url(#paint1_linear_243_511)"
    />,
    <Path
      key={Math.random()}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.33337 9.3332C8.33337 8.89138 8.69155 8.5332 9.13337 8.5332H19.2667C19.7085 8.5332 20.0667 8.89138 20.0667 9.3332C20.0667 9.77503 19.7085 10.1332 19.2667 10.1332H9.13337C8.69155 10.1332 8.33337 9.77503 8.33337 9.3332ZM8.33337 13.5998C8.33337 13.158 8.69155 12.7998 9.13337 12.7998H19.2667C19.7085 12.7998 20.0667 13.158 20.0667 13.5998C20.0667 14.0416 19.7085 14.3998 19.2667 14.3998H9.13337C8.69155 14.3998 8.33337 14.0416 8.33337 13.5998ZM9.13337 17.0665C8.69155 17.0665 8.33337 17.4247 8.33337 17.8665C8.33337 18.3083 8.69155 18.6665 9.13337 18.6665H16.0667C16.5085 18.6665 16.8667 18.3083 16.8667 17.8665C16.8667 17.4247 16.5085 17.0665 16.0667 17.0665H9.13337Z"
      fill="url(#paint2_linear_243_511)"
    />,
    <Defs key={Math.random()}>
      <LinearGradient
        id="paint0_linear_243_511"
        x1={5.13333}
        y1={0.8}
        x2={15}
        y2={24}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFD1DA" />
        <Stop offset={1} stopColor="#FFB8C5" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_243_511"
        x1={-6.8263}
        y1={26.9334}
        x2={22.1303}
        y2={8.33608}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFE5EA" stopOpacity={0.69} />
        <Stop offset={1} stopColor="#FFE5EA" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_243_511"
        x1={13.1334}
        y1={8.5332}
        x2={13.1334}
        y2={18.6665}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="white" />
        <Stop offset={1} stopColor="white" stopOpacity={0.8} />
      </LinearGradient>
    </Defs>
  ]
})
