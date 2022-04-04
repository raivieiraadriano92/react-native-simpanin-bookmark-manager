import { FunctionComponent } from 'react'

import { Icon, IIconProps } from 'native-base'
import { Path } from 'react-native-svg'

export const BookmarkIcon: FunctionComponent<IIconProps> = ({ strokeWidth = 1.5, ...props }) => (
  <Icon {...{ viewBox: '0 0 24 24', ...props }}>
    <Path
      key={Math.random()}
      d="M18 17.865V7C18 5.89543 17.1046 5 16 5H8C6.89543 5 6 5.89543 6 7V17.865C6 18.7128 6.98886 19.176 7.64018 18.6332L10.7196 16.067C11.4613 15.4489 12.5387 15.4489 13.2804 16.067L16.3598 18.6332C17.0111 19.176 18 18.7128 18 17.865Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
  </Icon>
)
