import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'

import { TabBar } from 'src/components/organisms'
import { Bookmarks, Collections, Home, Settings } from 'src/components/pages'

export type TabNavigator = {
  Bookmarks: undefined
  Collections: undefined
  Home: undefined
  Settings: undefined
}

const Tab = createBottomTabNavigator()

export default function (): JSX.Element {
  const theme = useTheme()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{
        backgroundColor: theme.colors.systemBackgroundPrimary
      }}
      tabBar={tabBarProps => <TabBar {...tabBarProps} />}
    >
      <Tab.Screen component={Home} name="Home" />
      <Tab.Screen component={Bookmarks} name="Bookmarks" />
      <Tab.Screen component={Collections} name="Collections" />
      <Tab.Screen component={Settings} name="Settings" />
    </Tab.Navigator>
  )
}
