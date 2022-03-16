import { FunctionComponent } from 'react'

import { Icon, IIconProps } from 'native-base'
import { Circle, Path } from 'react-native-svg'

export const EyeIcon: FunctionComponent<IIconProps & { closed?: boolean }> = ({
  closed,
  ...props
}) => (
  <Icon {...{ viewBox: '0 0 24 24', ...props }}>
    <Path
      key={Math.random()}
      d="M19 12C19 13 16 17 12 17C8 17 5 13 5 12C5 11 8 7 12 7C16 7 19 11 19 12Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <Circle
      key={Math.random()}
      cx={12}
      cy={12}
      r={2}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    {closed ? (
      <Path
        key={Math.random()}
        d="M17 7L7 17"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <></>
    )}
  </Icon>
)
