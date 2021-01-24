import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useTheme } from 'styled-components/native'

import { Flex, Icon } from 'src/components/atoms'
import { Button, Input, ScrollViewFaded } from 'src/components/molecules'
import { Header } from 'src/components/organisms'
import { RootStackNavigator } from 'src/navigator'
import { hexToRgba } from 'src/utils'

export default function (): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigator>>()

  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const theme = useTheme()

  return (
    <>
      <Header
        goBack={() => {
          navigation.goBack()
        }}
        subtitle="Your new password must be different from previous used passwords."
        title="Create new password"
      />
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
          flexGrow: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: theme.spacing.medium
        }}
        disableTopInset
      >
        <Flex flex paddingBottom="large">
          <Input
            {...{ secureTextEntry }}
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
            label="Password"
            placeholder="Type your password"
            right={({ alpha, color }) => (
              <TouchableOpacity
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry)
                }}
              >
                {secureTextEntry && <Icon.EyeClosed {...{ alpha, color }} />}
                {!secureTextEntry && <Icon.Eye {...{ alpha, color }} />}
              </TouchableOpacity>
            )}
          />
          <Flex paddingTop="small">
            <Input
              {...{ secureTextEntry }}
              autoCapitalize="none"
              autoCorrect={false}
              label="Confirm password"
              placeholder="Type your password"
            />
          </Flex>
        </Flex>
        <Button
          onPress={() => {
            //
          }}
          title="Send"
        />
      </ScrollViewFaded>
    </>
  )
}
