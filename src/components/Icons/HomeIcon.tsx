import { FunctionComponent } from 'react'

import { Icon, IIconProps } from 'native-base'
import { Path } from 'react-native-svg'

export const HomeIcon: FunctionComponent<IIconProps> = ({ strokeWidth = 1.5, ...props }) => (
  <Icon {...{ viewBox: '0 0 24 24', ...props }}>
    <Path
      key={Math.random()}
      d="M19 17V11.0292C19 10.3833 18.6881 9.77718 18.1625 9.40176L13.1625 5.83033C12.4671 5.33362 11.5329 5.33362 10.8375 5.83033L5.83752 9.40176C5.31193 9.77718 5 10.3833 5 11.0292V17C5 18.1046 5.89543 19 7 19H9C9.55228 19 10 18.5523 10 18V15C10 14.4477 10.4477 14 11 14H13C13.5523 14 14 14.4477 14 15V18C14 18.5523 14.4477 19 15 19H17C18.1046 19 19 18.1046 19 17Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)
