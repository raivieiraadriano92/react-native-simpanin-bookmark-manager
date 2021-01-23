import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Flex, Icon, Text } from 'src/components/atoms'
import { Button, Input } from 'src/components/molecules'
import { Header } from 'src/components/organisms'
import { RootStackNavigator } from 'src/navigator'

import * as Styled from './styled'

export default function (): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigator>>()

  const [secureTextEntry, setSecureTextEntry] = useState(true)

  return (
    <Flex flex>
      <Header
        goBack={() => {
          navigation.goBack()
        }}
        subtitle="Login and start manage your bookmark"
        title="Welcome back"
      />
      <Styled.FormContainer>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus
          label="Username"
          placeholder="Type your username"
        />
        <Flex paddingTop="small">
          <Input
            {...{ secureTextEntry }}
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
              ///
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
              ///
            }}
          >
            <Text color="primary" type="body3">
              Register
            </Text>
          </TouchableOpacity>
        </Flex>
        <Button
          onPress={() => {
            //
          }}
          title="Log In"
        />
      </Styled.FormContainer>
    </Flex>
  )
}
