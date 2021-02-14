import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { useTheme } from 'styled-components/native'

import {
  CreateNewPassword,
  LogIn,
  Onboarding,
  Register,
  ResetPassword
} from 'src/components/pages'

import TabNavigator from './tab-navigator'

export type RootStackNavigator = {
  CreateNewPassword: undefined
  Home: undefined
  LogIn: undefined
  Onboarding: undefined
  Register: undefined
  ResetPassword: undefined
}

enableScreens()

const Stack = createNativeStackNavigator()

export default function (): JSX.Element {
  const theme = useTheme()

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          contentStyle: {
            backgroundColor: theme.colors.systemBackgroundPrimary
          },
          headerShown: false,
          stackAnimation: 'slide_from_right'
        }}
      >
        <Stack.Screen component={CreateNewPassword} name="CreateNewPassword" />
        <Stack.Screen component={TabNavigator} name="Home" />
        <Stack.Screen component={LogIn} name="LogIn" />
        <Stack.Screen component={Onboarding} name="Onboarding" />
        <Stack.Screen component={Register} name="Register" />
        <Stack.Screen component={ResetPassword} name="ResetPassword" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
