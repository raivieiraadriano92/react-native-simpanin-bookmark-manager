import { FunctionComponent } from 'react'

import { Icon, IIconProps } from 'native-base'
import { Path } from 'react-native-svg'

export const CollectionIcon: FunctionComponent<IIconProps> = ({ strokeWidth = 1.5, ...props }) => (
  <Icon {...{ viewBox: '0 0 24 24', ...props }}>
    <Path
      key={Math.random()}
      d="M19 8.99999L12 12.5M12 12.5L5 8.99999M12 12.5L12 20M5.00002 10.1606V14.8394C5.00002 15.5571 5.38459 16.2198 6.00774 16.5758L11.0077 19.433C11.6226 19.7843 12.3774 19.7843 12.9923 19.433L17.9923 16.5758C18.6154 16.2198 19 15.5571 19 14.8393V10.1606C19 9.44293 18.6154 8.78024 17.9923 8.42415L12.9923 5.56701C12.3774 5.21566 11.6226 5.21566 11.0077 5.56701L6.00774 8.42415C5.38459 8.78024 5.00002 9.44293 5.00002 10.1606Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
  </Icon>
)
