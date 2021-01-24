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

export type RootStackNavigator = {
  CreateNewPassword: undefined
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
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
