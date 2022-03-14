import { FunctionComponent } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { useColorMode } from 'native-base'

import { AuthStackNavigator } from './AuthStackNavigator'

export const Navigation: FunctionComponent = () => {
  const colorMode = useColorMode()

  return (
    <NavigationContainer>
      <StatusBar style={colorMode.colorMode === 'dark' ? 'light' : 'dark'} />
      <AuthStackNavigator />
    </NavigationContainer>
  )
}
