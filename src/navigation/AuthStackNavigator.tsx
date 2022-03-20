import { FunctionComponent } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useColorModeValue, useTheme } from 'native-base'

import {
  LogInScreen,
  OnboardingScreen,
  NewPasswordScreen,
  RegisterScreen,
  ResetPasswordScreen,
  ResetPasswordConfirmationScreen
} from '../screens'
import { AuthStackParamList } from './types'

const NativeStackNavigator = createNativeStackNavigator<AuthStackParamList>()

export const AuthStackNavigator: FunctionComponent = () => {
  const theme = useTheme()

  const backgroundColor = useColorModeValue(
    theme.colors.lightBackground,
    theme.colors.darkBackground
  )

  const headerTintColor = useColorModeValue(theme.colors.darkText, theme.colors.lightText)

  return (
    <NativeStackNavigator.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        contentStyle: { backgroundColor },
        headerShadowVisible: false,
        headerStyle: { backgroundColor },
        headerTintColor,
        headerBackTitleVisible: false,
        title: ''
      }}>
      <NativeStackNavigator.Screen component={LogInScreen} name="LogIn" />
      <NativeStackNavigator.Screen
        component={OnboardingScreen}
        name="Onboarding"
        options={{ headerShown: false }}
      />
      <NativeStackNavigator.Screen component={NewPasswordScreen} name="NewPassword" />
      <NativeStackNavigator.Screen component={RegisterScreen} name="Register" />
      <NativeStackNavigator.Screen component={ResetPasswordScreen} name="ResetPassword" />
      <NativeStackNavigator.Screen
        component={ResetPasswordConfirmationScreen}
        name="ResetPasswordConfirmation"
      />
    </NativeStackNavigator.Navigator>
  )
}
