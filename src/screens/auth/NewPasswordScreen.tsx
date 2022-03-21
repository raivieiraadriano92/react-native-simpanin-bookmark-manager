import { useCallback, useRef } from 'react'

import { Button, FormControl, Heading, ScrollView, Text, VStack } from 'native-base'
import { TextInput } from 'react-native'
import { InputPassword } from 'src/components'
import { AuthStackScreenComponent } from 'src/navigation'

export const NewPasswordScreen: AuthStackScreenComponent<'NewPassword'> = ({ navigation }) => {
  const refConfirmPasswordInput = useRef<TextInput>(null)

  const focusConfirmPasswordInput = useCallback(() => refConfirmPasswordInput.current?.focus(), [])

  const onSubmit = useCallback(() => {
    navigation.popToTop()
  }, [navigation])

  return (
    <ScrollView _contentContainerStyle={{ flexGrow: 1, p: 6 }}>
      <VStack flex={1} safeAreaBottom space={10}>
        <VStack space={4}>
          <Heading fontSize="2xl" fontWeight="semibold" lineHeight="md">
            Create new password
          </Heading>
          <Text fontSize="sm" fontWeight="normal" lineHeight="lg" _light={{ opacity: 0.6 }}>
            Your new password must be different from previous used passwords.
          </Text>
        </VStack>
        <VStack flex={1} space={4}>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <InputPassword
              enablesReturnKeyAutomatically
              onSubmitEditing={focusConfirmPasswordInput}
              placeholder="Type your password"
              returnKeyType="next"
              variant="filled"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm password</FormControl.Label>
            <InputPassword
              enablesReturnKeyAutomatically
              placeholder="Type your password"
              ref={refConfirmPasswordInput}
              returnKeyType="go"
              variant="filled"
            />
          </FormControl>
        </VStack>
        <Button onPress={onSubmit}>Reset password</Button>
      </VStack>
    </ScrollView>
  )
}
