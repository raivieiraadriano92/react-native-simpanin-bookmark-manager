import React, { useEffect, useRef } from 'react'
import { Animated, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { useTheme } from 'styled-components/native'

import { Flex, Icon } from 'src/components/atoms'
import { Button } from 'src/components/molecules'
import { useGeneralContext } from 'src/contexts/general'
import { RootStackNavigator } from 'src/navigator'

import Indicators from './indicators'
import OnboardingItem from './onboarding-item'
import * as Styled from './styled'
import useData from './use-data'

export default function (): JSX.Element {
  const data = useData()

  const generalContext = useGeneralContext()

  const navigation = useNavigation<
    NativeStackNavigationProp<RootStackNavigator>
  >()

  const scrollX = useRef(new Animated.Value(0)).current

  const theme = useTheme()

  const windowDimensions = useWindowDimensions()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [navigation])

  return (
    <Styled.Container
      style={{
        backgroundColor: generalContext.darkMode
          ? theme.colors.systemBackgroundSecondary
          : scrollX.interpolate({
              inputRange: data.map((_, i) => i * windowDimensions.width),
              outputRange: data.map(item => item.bg)
            })
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
              renderItem={({ item }) => <OnboardingItem {...{ item }} />}
              scrollEventThrottle={32}
              showsHorizontalScrollIndicator={false}
            />
          </Flex>
          <Indicators {...{ scrollX }} />
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
    </Styled.Container>
  )
}
