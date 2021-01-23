import React, { useEffect, useMemo, useRef } from 'react'
import { Animated, Image, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { useTheme } from 'styled-components/native'

import Assets from 'src/assets'
import { Flex, Icon, Text } from 'src/components/atoms'
import { Button } from 'src/components/molecules'
import { useGeneralContext } from 'src/contexts/general'
import { RootStackNavigator } from 'src/navigator'
import { hexToRgba, resize } from 'src/utils'

import * as Styled from './styled'

export default function (): JSX.Element {
  const generalContext = useGeneralContext()

  const navigation = useNavigation<
    NativeStackNavigationProp<RootStackNavigator>
  >()

  const scrollX = useRef(new Animated.Value(0)).current

  const theme = useTheme()

  const data = useMemo(() => {
    const items = []

    const imageSize1 = resize({
      base: 'height',
      height: 264,
      size: 220,
      width: 312
    })
    const item1 = {
      bg: hexToRgba(theme.colors.primary, 0.2),
      description:
        'Create, save, manage your bookmark, images, link, or documents just in one app.',
      image: {
        height: imageSize1.height,
        source: Assets.images.onboarding1,
        width: imageSize1.width
      },
      key: '1',
      title: 'Simple way to Manage'
    }
    items.push(item1)

    const imageSize2 = resize({
      base: 'height',
      height: 270,
      size: 220,
      width: 296
    })
    const item2 = {
      bg: hexToRgba(theme.colors.blue, 0.2),
      description:
        'Say no to mess with grouped folders, add your tags, or just search with advanced filters.',
      image: {
        height: imageSize2.height,
        source: Assets.images.onboarding2,
        width: imageSize2.width
      },
      key: '2',
      title: 'Organize is easy'
    }
    items.push(item2)

    const imageSize3 = resize({
      base: 'height',
      height: 328,
      size: 220,
      width: 317
    })
    const item3 = {
      bg: hexToRgba(theme.colors.pink, 0.2),
      description:
        "We believe privacy is a right. We won't sell your data, no ads, ever.",
      image: {
        height: imageSize3.height,
        source: Assets.images.onboarding3,
        width: imageSize3.width
      },
      key: '3',
      title: 'Safe and Secure'
    }
    items.push(item3)

    return items
  }, [theme.colors.blue, theme.colors.pink, theme.colors.primary])

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
      <Styled.OnboardingContainer edges={['top']}>
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
        </Flex>
      </Styled.OnboardingContainer>
      <Styled.ButtonsContainer edges={['bottom']}>
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
      </Styled.ButtonsContainer>
    </Animated.View>
  )
}
