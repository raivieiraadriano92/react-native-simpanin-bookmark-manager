import { useCallback } from 'react'

import { Button, FormControl, Heading, Input, ScrollView, Text, VStack } from 'native-base'
import { RootStackScreenComponent } from 'src/navigation'

export const ResetPasswordScreen: RootStackScreenComponent<'ResetPassword'> = ({ navigation }) => {
  const onSubmit = useCallback(() => {
    navigation.navigate('ResetPasswordConfirmation')
  }, [navigation])

  return (
    <ScrollView _contentContainerStyle={{ flexGrow: 1, p: 6 }}>
      <VStack flex={1} safeAreaBottom space={10}>
        <VStack space={4}>
          <Heading fontSize="2xl" fontWeight="semibold" lineHeight="md">
            Reset password
          </Heading>
          <Text fontSize="sm" fontWeight="normal" lineHeight="lg" _light={{ opacity: 0.6 }}>
            Enter the email associated with your account and we’ll send and email with instructions
            to reset your password.
          </Text>
        </VStack>
        <VStack flex={1} justifyContent="space-between" space={10}>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically
              keyboardType="email-address"
              placeholder="Type your email"
              returnKeyType="go"
              variant="filled"
            />
          </FormControl>
          <Button onPress={onSubmit}>Send</Button>
        </VStack>
      </VStack>
    </ScrollView>
  )
}
