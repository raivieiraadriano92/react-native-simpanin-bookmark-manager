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

  return (
    <NativeStackNavigator.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ contentStyle: { backgroundColor } }}>
      <NativeStackNavigator.Screen
        component={LogInScreen}
        name="LogIn"
        options={{ headerShown: false }}
      />
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
