import { FunctionComponent } from 'react'

import { Icon, IIconProps } from 'native-base'
import { Path } from 'react-native-svg'

export const SettingsIcon: FunctionComponent<IIconProps> = ({ strokeWidth = 1.5, ...props }) => (
  <Icon {...{ viewBox: '0 0 24 24', ...props }}>
    <Path
      key={Math.random()}
      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6M12 18C8.68628 18 5.99999 15.3137 5.99999 12C5.99999 8.68629 8.68628 6 12 6M12 18L12 20M12 6L12 4M17.1961 9L18.9282 8M5.07178 16L6.80383 15M17.1961 15L18.9282 16M5.07178 8L6.80383 9"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)
