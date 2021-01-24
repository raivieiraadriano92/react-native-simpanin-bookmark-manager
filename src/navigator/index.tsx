import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { useTheme } from 'styled-components/native'

import {
  // Home,
  LogIn,
  // MakeSomething,
  Onboarding,
  Register,
  ResetPassword
} from 'src/components/pages'

export type RootStackNavigator = {
  // Home: undefined
  LogIn: undefined
  // MakeSomething: undefined
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
        initialRouteName="ResetPassword"
        screenOptions={{
          contentStyle: {
            backgroundColor: theme.colors.systemBackgroundPrimary
          },
          headerShown: false,
          stackAnimation: 'slide_from_right'
        }}
      >
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="LogIn" component={LogIn} />
        {/* <Stack.Screen name="MakeSomething" component={MakeSomething} /> */}
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
