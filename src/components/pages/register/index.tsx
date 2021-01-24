import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useTheme } from 'styled-components/native'

import { Flex, Icon, Text } from 'src/components/atoms'
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
        subtitle="Register to enjoy our best features"
        title="Join with us!"
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
          autoCapitalize="words"
          autoCorrect={false}
          autoFocus
          label="Name"
          placeholder="Type your name"
        />
        <Flex paddingTop="small">
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            label="Email"
            placeholder="Type your email"
          />
        </Flex>
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
          <Text type="body3">
            By pressing “Register Now” button you agree to our Terms of Use and
            Privacy Policy.
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          flexDirection="row"
          justifyContent="center"
          paddingVertical="large"
        >
          <Text type="body3">{'Already have an account? '}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LogIn')
            }}
          >
            <Text color="primary" type="body3">
              Log In
            </Text>
          </TouchableOpacity>
        </Flex>
        <Flex paddingBottom="small">
          <Button
            onPress={() => {
              //
            }}
            title="Register"
          />
        </Flex>
        <Button
          left={() => <Icon.Google />}
          onPress={() => {
            //
          }}
          title="Register with Google"
          type="secondary"
        />
      </ScrollViewFaded>
    </>
  )
}
