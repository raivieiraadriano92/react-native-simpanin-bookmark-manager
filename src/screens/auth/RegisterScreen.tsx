import { useCallback, useRef } from 'react'

import { Button, FormControl, Heading, Input, ScrollView, Text, VStack } from 'native-base'
import { TextInput } from 'react-native'
import { InputPassword } from 'src/components'
import { AuthStackScreenComponent } from 'src/navigation'

export const RegisterScreen: AuthStackScreenComponent<'Register'> = ({ navigation }) => {
  const refEmailInput = useRef<TextInput>()

  const refPasswordInput = useRef<TextInput>(null)

  const focusEmailInput = useCallback(() => refEmailInput.current?.focus(), [])

  const focusPasswordInput = useCallback(() => refPasswordInput.current?.focus(), [])

  const onSubmit = useCallback(() => {}, [])

  return (
    <ScrollView _contentContainerStyle={{ flexGrow: 1, p: 6 }}>
      <VStack flex={1} safeAreaBottom space={10}>
        <VStack space={4}>
          <Heading fontSize="2xl" fontWeight="semibold" lineHeight="md">
            Join with us!
          </Heading>
          <Text fontSize="sm" fontWeight="normal" lineHeight="lg" _light={{ opacity: 0.6 }}>
            Register to enjoy our best features
          </Text>
        </VStack>
        <VStack flex={1} justifyContent="flex-end" space={10}>
          <VStack space={4}>
            <FormControl>
              <FormControl.Label>Full name</FormControl.Label>
              <Input
                autoCapitalize="words"
                enablesReturnKeyAutomatically
                onSubmitEditing={focusEmailInput}
                placeholder="Type your name"
                returnKeyType="next"
                variant="filled"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                enablesReturnKeyAutomatically
                keyboardType="email-address"
                onSubmitEditing={focusPasswordInput}
                placeholder="Type your email"
                ref={refEmailInput}
                returnKeyType="next"
                variant="filled"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <InputPassword
                enablesReturnKeyAutomatically
                placeholder="Type your password"
                ref={refPasswordInput}
                returnKeyType="go"
                variant="filled"
              />
            </FormControl>
            <Text fontSize="sm" fontWeight="normal" lineHeight="lg" _light={{ opacity: 0.6 }}>
              By pressing “Register Now” button you agree to our Terms of Use and Privacy Policy.
            </Text>
          </VStack>
          <Button onPress={onSubmit}>Register Now</Button>
        </VStack>
      </VStack>
    </ScrollView>
  )
}
