import { FunctionComponent } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { OnboardingScreen } from '../screens'
import { AuthStackParamList } from './types'

const NativeStackNavigator = createNativeStackNavigator<AuthStackParamList>()

export const AuthStackNavigator: FunctionComponent = () => (
  <NativeStackNavigator.Navigator initialRouteName="Onboarding">
    <NativeStackNavigator.Screen component={OnboardingScreen} name="Onboarding" />
  </NativeStackNavigator.Navigator>
)
