import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useTheme } from 'styled-components/native'

import { Flex } from 'src/components/atoms'
import { Button, Input, ScrollViewFaded } from 'src/components/molecules'
import { Header } from 'src/components/organisms'
import { RootStackNavigator } from 'src/navigator'
import { hexToRgba } from 'src/utils'

export default function (): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigator>>()

  const theme = useTheme()

  return (
    <>
      <Header
        goBack={() => {
          navigation.goBack()
        }}
        subtitle="Enter the email associated with your account and we’ll send and email with instructions to reset your password."
        title="Reset password"
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
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
            keyboardType="email-address"
            label="Email"
            placeholder="Type your email"
          />
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
