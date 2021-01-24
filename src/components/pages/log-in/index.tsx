import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useTheme } from 'styled-components/native'

import { Flex, Icon, Text } from 'src/components/atoms'
import { Button, Input, ScrollViewFaded } from 'src/components/molecules'
import { Header } from 'src/components/organisms'
import { useGeneralContext } from 'src/contexts/general'
import { RootStackNavigator } from 'src/navigator'
import { hexToRgba } from 'src/utils'

export default function (): JSX.Element {
  const generalContext = useGeneralContext()

  const navigation = useNavigation<StackNavigationProp<RootStackNavigator>>()

  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const theme = useTheme()

  return (
    <>
      <Header
        goBack={() => {
          navigation.goBack()
        }}
        subtitle="Login and start manage your bookmark"
        title="Welcome Back!"
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
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus
          keyboardType="email-address"
          label="Email"
          placeholder="Type your email"
        />
        <Flex paddingTop="small">
          <Input
            {...{ secureTextEntry }}
            autoCapitalize="none"
            autoCorrect={false}
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
        </Flex>
        <Flex
          alignItems="center"
          flexDirection="row"
          justifyContent="center"
          paddingTop="large"
        >
          <Text type="body3">{'Forget your password? '}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ResetPassword')
            }}
          >
            <Text color="primary" type="body3">
              Reset password
            </Text>
          </TouchableOpacity>
        </Flex>
        <Flex
          alignItems="center"
          flexDirection="row"
          justifyContent="center"
          paddingVertical="large"
        >
          <Text type="body3">{'Don’t have an account? '}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register')
            }}
          >
            <Text color="primary" type="body3">
              Register
            </Text>
          </TouchableOpacity>
        </Flex>
        <Button
          onPress={() => {
            generalContext.logIn()
            navigation.replace('Home')
          }}
          title="Log In"
        />
      </ScrollViewFaded>
    </>
  )
}
