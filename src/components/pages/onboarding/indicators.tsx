import React from 'react'
import { Animated, useWindowDimensions } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Flex } from 'src/components/atoms'
import { hexToRgba } from 'src/utils'

import * as Styled from './styled'
import useData from './use-data'

type Props = {
  scrollX: Animated.Value
}

export default function ({ scrollX }: Props): JSX.Element {
  const data = useData()

  const theme = useTheme()

  const windowDimensions = useWindowDimensions()

  return (
    <Flex flexDirection="row" padding="medium">
      {data.map((item, i) => (
        <Styled.Indicator
          key={item.key}
          style={{
            backgroundColor: scrollX.interpolate({
              inputRange: [
                (i - 1) * windowDimensions.width,
                i * windowDimensions.width,
                (i + 1) * windowDimensions.width
              ],
              outputRange: [
                hexToRgba(theme.colors.text, 0.4),
                '#5460FE',
                hexToRgba(theme.colors.text, 0.4)
              ],
              extrapolate: 'clamp'
            }),
            transform: [
              {
                scale: scrollX.interpolate({
                  inputRange: [
                    (i - 1) * windowDimensions.width,
                    i * windowDimensions.width,
                    (i + 1) * windowDimensions.width
                  ],
                  outputRange: [1, 1.5, 1],
                  extrapolate: 'clamp'
                })
              }
            ]
          }}
        />
      ))}
    </Flex>
  )
}
