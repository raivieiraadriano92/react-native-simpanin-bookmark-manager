import React from 'react'
import { useTheme } from 'styled-components/native'
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle
} from 'react-native-reanimated'

import * as Styled from './styled'

type Props = {
  baseWidth: number
  index: number
  scrollX: Animated.SharedValue<number>
}

export default function ({ baseWidth, index, scrollX }: Props): JSX.Element {
  const theme = useTheme()

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollX.value,
      [(index - 1) * baseWidth, index * baseWidth, (index + 1) * baseWidth],
      [theme.colors.text, '#5460FE', theme.colors.text]
    ),
    opacity: interpolate(
      scrollX.value,
      [(index - 1) * baseWidth, index * baseWidth, (index + 1) * baseWidth],
      [0.4, 1, 0.4],
      Extrapolate.CLAMP
    ),
    transform: [
      {
        scale: interpolate(
          scrollX.value,
          [(index - 1) * baseWidth, index * baseWidth, (index + 1) * baseWidth],
          [1, 1.5, 1],
          Extrapolate.CLAMP
        )
      }
    ]
  }))

  return <Styled.Indicator style={animatedStyle} />
}
