import { FunctionComponent } from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { AuthStackNavigator } from './AuthStackNavigator'

export const Navigation: FunctionComponent = () => (
  <NavigationContainer>
    <AuthStackNavigator />
  </NavigationContainer>
)
