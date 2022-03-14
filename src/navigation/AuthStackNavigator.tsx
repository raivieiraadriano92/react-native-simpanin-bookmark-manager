import { FunctionComponent } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

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

export const AuthStackNavigator: FunctionComponent = () => (
  <NativeStackNavigator.Navigator initialRouteName="Onboarding">
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
