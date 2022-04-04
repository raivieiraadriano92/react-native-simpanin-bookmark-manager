import { createIcon } from 'native-base'
import { Path } from 'react-native-svg'

export const PlusIcon = createIcon({
  viewBox: '0 0 24 24',
  path: [
    <Path
      key={Math.random()}
      d="M19.0711 12H4.92893"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M12 4.92893V19.0711"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})
