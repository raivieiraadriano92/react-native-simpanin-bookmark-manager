import React, { PropsWithChildren, useCallback, useEffect } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { useTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Portal } from 'react-native-paper'

import { Flex, Icon, Text } from 'src/components/atoms'
import { useGeneralContext } from 'src/contexts/general'
import { hexToRgba } from 'src/utils'

type Props = PropsWithChildren<{
  close(): void
  title: string
  visible: boolean
}>

export default function ({
  children,
  close,
  title,
  visible
}: Props): JSX.Element {
  const generalContext = useGeneralContext()

  const theme = useTheme()

  const opacity = useSharedValue(0)
  const translateY = useSharedValue(300)

  const animatedStyleBackdrop = useAnimatedStyle(() => ({
    opacity: opacity.value
  }))

  const animatedStyleContent = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }]
  }))

  const handleClose = useCallback(() => {
    opacity.value = withTiming(
      0,
      {
        easing: Easing.inOut(Easing.ease)
      },
      isFinished => {
        'worklet'

        if (isFinished) {
          runOnJS(close)()
        }
      }
    )

    translateY.value = withTiming(300, {
      easing: Easing.inOut(Easing.ease)
    })
  }, [close, opacity, translateY])

  useEffect(() => {
    if (visible) {
      opacity.value = withTiming(1, {
        easing: Easing.inOut(Easing.ease)
      })

      translateY.value = withTiming(0, {
        easing: Easing.inOut(Easing.ease)
      })
    }
  }, [opacity, translateY, visible])

  return visible ? (
    <Portal>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: generalContext.darkMode
              ? hexToRgba(theme.colors.systemBackgroundSecondary, 0.5)
              : hexToRgba('#070C4D', 0.3)
          },
          animatedStyleBackdrop
        ]}
      />
      <Animated.View
        style={[
          animatedStyleContent,
          {
            backgroundColor:
              theme.colors[
                generalContext.darkMode ? 'systemBackgroundSecondary' : 'white'
              ],
            borderTopLeftRadius: normalize(24),
            borderTopRightRadius: normalize(24),
            bottom: 0,
            position: 'absolute',
            width: '100%'
          }
        ]}
      >
        <SafeAreaView edges={['bottom']}>
          <Flex padding="medium">
            <Flex
              alignItems="center"
              flexDirection="row"
              justifyContent="space-between"
              paddingBottom="medium"
            >
              <Text type="h4">{title}</Text>
              <TouchableOpacity onPress={handleClose}>
                <Icon.Close alpha={0.6} color="text" />
              </TouchableOpacity>
            </Flex>
            {children}
          </Flex>
        </SafeAreaView>
      </Animated.View>
    </Portal>
  ) : (
    <></>
  )
}
