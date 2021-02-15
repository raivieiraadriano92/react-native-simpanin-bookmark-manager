import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Flex, Icon } from 'src/components/atoms'
import { Input } from 'src/components/molecules'
import Fade from 'src/components/molecules/scrollview-faded/fade'
import { INPUT_HEIGHT } from 'src/components/molecules/input'
import { Header } from 'src/components/organisms'
import { useGeneralContext } from 'src/contexts/general'

type Props = {
  onChangeHeaderHeight(_: number): void
  scrollY: Animated.SharedValue<number>
  showSearchModal(): void
}

export default function ({
  onChangeHeaderHeight,
  scrollY,
  showSearchModal
}: Props): JSX.Element {
  const generalContext = useGeneralContext()

  const theme = useTheme()

  const insets = useSafeAreaInsets()

  const [headerHeight, setHeaderHeight] = useState(0)

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollY.value,
      [0, headerHeight],
      [1, 0],
      Extrapolate.CLAMP
    ),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [0, headerHeight],
          [0, -headerHeight],
          Extrapolate.CLAMP
        )
      }
    ]
  }))

  const animatedSearchButtonStyle = useAnimatedStyle(() => ({
    height: interpolate(
      scrollY.value,
      [0, headerHeight],
      [
        INPUT_HEIGHT + theme.spacing.large,
        INPUT_HEIGHT + theme.spacing.medium + insets.top
      ],
      Extrapolate.CLAMP
    ),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [0, headerHeight],
          [0, -headerHeight],
          Extrapolate.CLAMP
        )
      }
    ]
  }))

  return (
    <>
      <Animated.View
        onLayout={e => {
          if (!headerHeight) {
            setHeaderHeight(e.nativeEvent.layout.height)
            onChangeHeaderHeight(e.nativeEvent.layout.height)
          }
        }}
        style={[
          {
            position: 'absolute',
            width: '100%',
            zIndex: 1
          },
          animatedHeaderStyle
        ]}
      >
        <Header title={`Hello, ${generalContext.user?.name}!`} />
      </Animated.View>
      <Animated.View
        style={[
          {
            backgroundColor: theme.colors.systemBackgroundPrimary,
            justifyContent: 'flex-end',
            position: 'absolute',
            width: '100%',
            zIndex: 1,
            top: headerHeight
          },
          animatedSearchButtonStyle
        ]}
      >
        <Flex paddingHorizontal="medium">
          <Input
            left={iconProps => <Icon.Search {...iconProps} />}
            placeholder="Search your bookmark"
          />
          <TouchableOpacity
            onPress={showSearchModal}
            style={{
              backgroundColor: theme.colors.transparent,
              position: 'absolute',
              height: '100%',
              width: '100%'
            }}
          />
        </Flex>
        <Flex style={{ position: 'absolute', top: '100%', width: '100%' }}>
          <Fade disableInset type="top" />
        </Flex>
      </Animated.View>
    </>
  )
}
