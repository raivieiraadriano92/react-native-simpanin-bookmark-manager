import React, { useEffect, useMemo, useRef } from 'react'
import { Animated, Image, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { useTheme } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import normalize from 'react-native-normalize'

import Assets from 'src/assets'
import { Flex, Icon, Text } from 'src/components/atoms'
import { Button } from 'src/components/molecules'
import { useGeneralContext } from 'src/contexts/general'
import { RootStackNavigator } from 'src/navigator'
import { hexToRgba, resize } from 'src/utils'

const sizes = [
  resize({ base: 'height', height: 264, size: 220, width: 312 }),
  resize({ base: 'height', height: 270, size: 220, width: 296 }),
  resize({ base: 'height', height: 328, size: 220, width: 317 })
]

export default function (): JSX.Element {
  const generalContext = useGeneralContext()

  const navigation = useNavigation<
    NativeStackNavigationProp<RootStackNavigator>
  >()

  const scrollX = useRef(new Animated.Value(0)).current

  const theme = useTheme()

  const data = useMemo(
    () => [
      {
        bg: hexToRgba(theme.colors.primary, 0.2),
        description:
          'Create, save, manage your bookmark, images, link, or documents just in one app.',
        image: {
          height: sizes[0].height,
          source: Assets.images.onboarding1,
          width: sizes[0].width
        },
        key: '1',
        title: 'Simple way to Manage'
      },
      {
        bg: hexToRgba(theme.colors.blue, 0.2),
        description:
          'Say no to mess with grouped folders, add your tags, or just search with advanced filters.',
        image: {
          height: sizes[1].height,
          source: Assets.images.onboarding2,
          width: sizes[1].width
        },
        key: '2',
        title: 'Organize is easy'
      },
      {
        bg: hexToRgba(theme.colors.pink, 0.2),
        description:
          "We believe privacy is a right. We won't sell your data, no ads, ever.",
        image: {
          height: sizes[2].height,
          source: Assets.images.onboarding3,
          width: sizes[2].width
        },
        key: '3',
        title: 'Safe and Secure'
      }
    ],
    []
  )

  const windowDimensions = useWindowDimensions()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [navigation])

  return (
    <Animated.View
      style={{
        backgroundColor: generalContext.darkMode
          ? theme.colors.systemBackgroundSecondary
          : scrollX.interpolate({
              inputRange: data.map((_, i) => i * windowDimensions.width),
              outputRange: data.map(item => item.bg)
            }),
        flex: 1
      }}
    >
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <Flex flex paddingTop="medium">
          <Flex alignItems="center">
            <Icon.Logo color={generalContext.darkMode ? 'white' : 'primary'} />
          </Flex>
          <Flex flex paddingTop="medium">
            <Animated.FlatList
              data={data}
              horizontal
              keyExtractor={item => item.key}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              pagingEnabled
              renderItem={({ item }) => (
                <Flex
                  justifyContent="center"
                  style={{
                    width: windowDimensions.width
                  }}
                >
                  <Flex alignItems="center">
                    <Image
                      resizeMode="cover"
                      source={item.image.source}
                      style={{
                        height: item.image.height,
                        width: item.image.width
                      }}
                    />
                  </Flex>
                  <Flex paddingHorizontal="medium">
                    <Text type="h3">{item.title}</Text>
                    <Flex paddingTop="small">
                      <Text alpha={0.6} type="body2">
                        {item.description}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              )}
              scrollEventThrottle={32}
              showsHorizontalScrollIndicator={false}
            />
          </Flex>
          <Flex flexDirection="row" padding="medium">
            {data.map((item, i) => (
              <Animated.View
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
                  borderRadius: 6,
                  height: 6,
                  marginRight: theme.spacing.tiny,
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
                  ],
                  width: 6
                }}
              />
            ))}
          </Flex>
        </Flex>
      </SafeAreaView>
      <SafeAreaView
        edges={['bottom']}
        style={{
          backgroundColor: theme.colors.systemBackgroundPrimary,
          borderTopLeftRadius: normalize(18),
          borderTopRightRadius: normalize(18)
        }}
      >
        <Flex paddingHorizontal="medium" paddingVertical="large">
          <Flex paddingBottom="small">
            <Button
              onPress={() => {
                //
              }}
              title="Log In"
              type="secondary"
            />
          </Flex>
          <Button
            onPress={() => {
              //
            }}
            title="Register"
          />
        </Flex>
      </SafeAreaView>
    </Animated.View>
  )
}
