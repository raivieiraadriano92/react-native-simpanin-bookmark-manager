import React, { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'
import {
  BottomTabBarOptions,
  BottomTabBarProps
} from '@react-navigation/bottom-tabs'

import { useTheme } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Flex, Icon, Text } from 'src/components/atoms'

export type TabNavigator = {
  Bookmarks: undefined
  Collections: undefined
  Home: undefined
  Settings: undefined
}

function getTabInfo({
  focused,
  routeName
}: {
  focused: boolean
  routeName: keyof TabNavigator
}): {
  label: string
  icon: ReactNode
} {
  switch (routeName) {
    case 'Bookmarks':
      return {
        label: 'Bookmarks',
        icon: (
          <Icon.Bookmark
            alpha={focused ? 1 : 0.6}
            color={focused ? 'primary' : 'text'}
          />
        )
      }
    case 'Collections':
      return {
        label: 'Collections',
        icon: (
          <Icon.Cube
            alpha={focused ? 1 : 0.6}
            color={focused ? 'primary' : 'text'}
          />
        )
      }
    case 'Settings':
      return {
        label: 'Settings',
        icon: (
          <Icon.Setting
            alpha={focused ? 1 : 0.6}
            color={focused ? 'primary' : 'text'}
          />
        )
      }
    default:
      return {
        label: 'Home',
        icon: (
          <Icon.Home
            alpha={focused ? 1 : 0.6}
            color={focused ? 'primary' : 'text'}
          />
        )
      }
  }
}

export default function ({
  navigation,
  state
}: BottomTabBarProps<BottomTabBarOptions>): JSX.Element {
  const theme = useTheme()

  return (
    <SafeAreaView
      edges={['bottom']}
      style={{ backgroundColor: theme.colors.systemBackgroundSecondary }}
    >
      <Flex
        alignItems="center"
        flexDirection="row"
        justifyContent="space-evenly"
        style={{
          height: 68
        }}
      >
        {state.routes.map((route, index) => {
          const focused = state.index === index

          const tabInfo = getTabInfo({
            focused,
            routeName: route.name as keyof TabNavigator
          })

          return (
            <TouchableOpacity
              key={route.name}
              onPress={() => {
                navigation.navigate(route.name)
              }}
            >
              <Flex alignItems="center" justifyContent="center">
                <Flex paddingBottom="tinyest">{tabInfo.icon}</Flex>
                <Text
                  alpha={focused ? 1 : 0.6}
                  color={focused ? 'primary' : 'text'}
                  type="body4"
                >
                  {tabInfo.label}
                </Text>
              </Flex>
            </TouchableOpacity>
          )
        })}
      </Flex>
    </SafeAreaView>
  )
}
