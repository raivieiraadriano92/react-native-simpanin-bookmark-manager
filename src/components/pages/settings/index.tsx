import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { StackNavigationProp } from '@react-navigation/stack'

import { Flex, Text } from 'src/components/atoms'
import { Button, ScrollViewFaded } from 'src/components/molecules'
import { Header } from 'src/components/organisms'
import { useGeneralContext } from 'src/contexts/general'
import { RootStackNavigator } from 'src/navigator'
import { TabNavigator } from 'src/navigator/tab-navigator'
import { hexToRgba } from 'src/utils'

export default function (): JSX.Element {
  const generalContext = useGeneralContext()

  const navigation = useNavigation<BottomTabNavigationProp<TabNavigator>>()
  const rootNavigation = navigation.dangerouslyGetParent<
    StackNavigationProp<RootStackNavigator>
  >()

  const theme = useTheme()

  return (
    <>
      <Header title="Settings" />
      <ScrollViewFaded
        colors={{
          bottom: [
            hexToRgba(theme.colors.systemBackgroundPrimary, 0),
            theme.colors.systemBackgroundPrimary
          ],
          top: [
            theme.colors.systemBackgroundPrimary,
            hexToRgba(theme.colors.systemBackgroundPrimary, 0)
          ]
        }}
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.medium
        }}
        disableTopInset
      >
        <Button
          onPress={generalContext.toggleDarkMode}
          title={`${generalContext.darkMode ? 'Light' : 'Dark'} mode`}
        />
        <Flex alignItems="center" paddingTop="medium">
          <TouchableOpacity
            onPress={() => {
              generalContext.logOut()
              rootNavigation.replace('Onboarding')
            }}
          >
            <Text color="error" type="body1">
              Log Out
            </Text>
          </TouchableOpacity>
        </Flex>
      </ScrollViewFaded>
    </>
  )
}
