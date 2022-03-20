import { useCallback, useMemo, useRef, useState } from 'react'

import {
  Button,
  FormControl,
  Heading,
  IconButton,
  Input,
  ScrollView,
  Text,
  VStack
} from 'native-base'
import { TextInput } from 'react-native'
import { Icons } from 'src/components'
import { AuthStackScreenComponent } from 'src/navigation'

export const LogInScreen: AuthStackScreenComponent<'LogIn'> = ({ navigation }) => {
  const refPasswordInput = useRef<TextInput>()

  const [showPassword, setShowPassword] = useState(false)

  const goTo = useMemo(
    () => ({
      resetPasswordScreen: () => navigation.navigate('ResetPassword'),
      registerScreen: () => navigation.navigate('Register')
    }),
    [navigation]
  )

  const focusPasswordInput = useCallback(() => refPasswordInput.current?.focus(), [])

  const onSubmit = useCallback(() => {}, [])

  const toggleShowPassword = useCallback(() => setShowPassword((prev) => !prev), [])

  return (
    <ScrollView _contentContainerStyle={{ flexGrow: 1, p: 6 }}>
      <VStack flex={1} safeAreaBottom space={10}>
        <VStack space={4}>
          <Heading fontSize="2xl" fontWeight="semibold" lineHeight="md">
            Welcome Back!
          </Heading>
          <Text fontSize="sm" fontWeight="normal" lineHeight="lg" _light={{ opacity: 0.6 }}>
            Login and start manage your bookmark
          </Text>
        </VStack>
        <VStack flex={1} justifyContent="flex-end" space={10}>
          <VStack space={4}>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                enablesReturnKeyAutomatically
                keyboardType="email-address"
                onSubmitEditing={focusPasswordInput}
                placeholder="Type your email"
                returnKeyType="next"
                variant="filled"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                enablesReturnKeyAutomatically
                placeholder="Type your password"
                ref={refPasswordInput}
                returnKeyType="go"
                rightElement={
                  <IconButton
                    borderRadius="full"
                    colorScheme="blueGray"
                    icon={<Icons.Eye closed={showPassword} color="blueGray.500" size={6} />}
                    onPress={toggleShowPassword}
                  />
                }
                type={showPassword ? 'text' : 'password'}
                variant="filled"
              />
            </FormControl>
          </VStack>
          <VStack space={4}>
            <Button onPress={onSubmit}>Log In</Button>
            <Button onPress={goTo.resetPasswordScreen} size="sm" variant="ghost">
              Reset password
            </Button>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  )
}
