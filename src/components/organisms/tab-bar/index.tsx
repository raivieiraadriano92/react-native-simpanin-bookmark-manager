import React, { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'
import {
  BottomTabBarOptions,
  BottomTabBarProps
} from '@react-navigation/bottom-tabs'
import normalize from 'react-native-normalize'
import { useTheme } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Flex, Icon, Text } from 'src/components/atoms'
import { TabNavigator } from 'src/navigator/tab-navigator'

function getTabInfo({
  focused,
  routeName
}: {
  focused: boolean
  routeName: keyof TabNavigator | 'Add'
}): {
  label?: string
  icon: ReactNode
} {
  switch (routeName) {
    case 'Add':
      return {
        icon: <Icon.Plus color="primary" />
      }
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
      style={{
        backgroundColor: theme.colors.systemBackgroundSecondary
      }}
    >
      <Flex
        alignItems="center"
        flexDirection="row"
        justifyContent="space-evenly"
        style={{ height: 68 }}
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
                if (route.name === 'Add') {
                  return
                }

                navigation.navigate(route.name)
              }}
            >
              <Flex
                alignItems="center"
                justifyContent="center"
                style={
                  route.name === 'Add'
                    ? {
                        borderColor: theme.colors.primary,
                        borderRadius: normalize(12),
                        borderWidth: 1,
                        height: normalize(37),
                        width: normalize(37)
                      }
                    : {}
                }
              >
                {tabInfo.icon}
                {!!tabInfo.label && (
                  <Flex paddingTop="tinyest">
                    <Text
                      alpha={focused ? 1 : 0.6}
                      color={focused ? 'primary' : 'text'}
                      type="body4"
                    >
                      {tabInfo.label}
                    </Text>
                  </Flex>
                )}
              </Flex>
            </TouchableOpacity>
          )
        })}
      </Flex>
    </SafeAreaView>
  )
}
