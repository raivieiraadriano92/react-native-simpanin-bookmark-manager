import React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { useTheme } from 'styled-components/native'

import { EditProfile } from 'src/components/pages'

import TabNavigator from './tab-navigator'

export type LoggedStackNavigator = {
  EditProfile: undefined
  TabNavigator: undefined
}

const Stack = createNativeStackNavigator()

export default function (): JSX.Element {
  const theme = useTheme()

  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        contentStyle: {
          backgroundColor: theme.colors.systemBackgroundPrimary
        },
        headerShown: false,
        stackAnimation: 'slide_from_right'
      }}
    >
      <Stack.Screen component={EditProfile} name="EditProfile" />
      <Stack.Screen component={TabNavigator} name="TabNavigator" />
    </Stack.Navigator>
  )
}
