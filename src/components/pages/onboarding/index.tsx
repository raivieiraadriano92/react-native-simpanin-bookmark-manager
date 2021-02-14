import React from 'react'
import { FlatList, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { useTheme } from 'styled-components/native'
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated'

import { Flex, Icon } from 'src/components/atoms'
import { Button } from 'src/components/molecules'
import { useGeneralContext } from 'src/contexts/general'
import { RootStackNavigator } from 'src/navigator'

import Indicator from './indicator'
import OnboardingItem from './onboarding-item'
import * as Styled from './styled'
import useData from './use-data'

export default function (): JSX.Element {
  const data = useData()

  const generalContext = useGeneralContext()

  const navigation = useNavigation<
    NativeStackNavigationProp<RootStackNavigator>
  >()

  const scrollX = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x
  })

  const theme = useTheme()

  const windowDimensions = useWindowDimensions()

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: generalContext.darkMode
      ? theme.colors.systemBackgroundSecondary
      : interpolateColor(
          scrollX.value,
          data.map((_, i) => i * windowDimensions.width),
          data.map(item => item.bg)
        )
  }))

  return (
    <Styled.Container style={animatedStyle}>
      <Styled.OnboardingContainer edges={['top']}>
        <Flex flex paddingTop="medium">
          <Flex alignItems="center">
            <Icon.Logo color={generalContext.darkMode ? 'white' : 'primary'} />
          </Flex>
          <Flex flex paddingTop="medium">
            <FlatList
              data={data}
              horizontal
              keyExtractor={item => item.key}
              pagingEnabled
              renderItem={({ item }) => <OnboardingItem {...{ item }} />}
              renderScrollComponent={scrollComponentProps => (
                <Animated.ScrollView
                  {...scrollComponentProps}
                  onScroll={scrollHandler}
                />
              )}
              scrollEventThrottle={32}
              showsHorizontalScrollIndicator={false}
            />
          </Flex>
          <Flex flexDirection="row" padding="medium">
            {data.map((item, index) => (
              <Indicator
                key={index}
                {...{ baseWidth: windowDimensions.width, index, scrollX }}
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
                navigation.navigate('LogIn')
              }}
              title="Log In"
              type="secondary"
            />
          </Flex>
          <Button
            onPress={() => {
              navigation.navigate('Register')
            }}
            title="Register"
          />
        </Flex>
      </Styled.ButtonsContainer>
    </Styled.Container>
  )
}
