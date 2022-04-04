import { createIcon } from 'native-base'
import { Path } from 'react-native-svg'

export const MoreIcon = createIcon({
  viewBox: '0 0 24 24',
  path: [
    <Path
      key={Math.random()}
      d="M5.33337 12V12.6667M12 12V12.6667M18.6667 12V12.6667"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})
