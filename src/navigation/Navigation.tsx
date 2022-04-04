import { FunctionComponent, useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Session } from '@supabase/supabase-js'
import { StatusBar } from 'expo-status-bar'
import { useColorMode, useColorModeValue, useTheme } from 'native-base'
import { supabase } from 'src/services/supabase'

import {
  HomeScreen,
  LogInScreen,
  OnboardingScreen,
  NewPasswordScreen,
  RegisterScreen,
  ResetPasswordScreen,
  ResetPasswordConfirmationScreen
} from '../screens'
import { linking } from './linking'
import { RootStackParamList } from './types'

const NativeStackNavigator = createNativeStackNavigator<RootStackParamList>()

export const Navigation: FunctionComponent = () => {
  const colorMode = useColorMode()

  const theme = useTheme()

  const backgroundColor = useColorModeValue(
    theme.colors.lightBackground,
    theme.colors.darkBackground
  )

  const headerTintColor = useColorModeValue(theme.colors.darkText, theme.colors.lightText)

  const [session, setSession] = useState<Session | null>(() => supabase.auth.session())

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <NavigationContainer linking={linking}>
      <StatusBar style={colorMode.colorMode === 'dark' ? 'light' : 'dark'} />
      <NativeStackNavigator.Navigator
        screenOptions={{
          contentStyle: { backgroundColor },
          headerShadowVisible: false,
          headerStyle: { backgroundColor },
          headerTintColor,
          headerBackTitleVisible: false,
          title: ''
        }}>
        {session ? (
          <>
            <NativeStackNavigator.Screen
              component={HomeScreen}
              name="Home"
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <NativeStackNavigator.Screen
              component={OnboardingScreen}
              name="Onboarding"
              options={{ headerShown: false }}
            />
            <NativeStackNavigator.Screen component={LogInScreen} name="LogIn" />
            <NativeStackNavigator.Screen component={NewPasswordScreen} name="NewPassword" />
            <NativeStackNavigator.Screen component={RegisterScreen} name="Register" />
            <NativeStackNavigator.Screen component={ResetPasswordScreen} name="ResetPassword" />
            <NativeStackNavigator.Screen
              component={ResetPasswordConfirmationScreen}
              name="ResetPasswordConfirmation"
              options={{ headerShown: false, presentation: 'modal' }}
            />
          </>
        )}
      </NativeStackNavigator.Navigator>
    </NavigationContainer>
  )
}
