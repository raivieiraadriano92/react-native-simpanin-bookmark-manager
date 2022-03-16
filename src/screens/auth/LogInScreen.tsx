import { useCallback, useRef, useState } from 'react'

import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  IconButton,
  Input,
  Text,
  VStack
} from 'native-base'
import { TextInput, TouchableOpacity } from 'react-native'
import { Icons } from 'src/components'
import { AuthStackScreenComponent } from 'src/navigation'

export const LogInScreen: AuthStackScreenComponent<'LogIn'> = ({ navigation }) => {
  const refPasswordInput = useRef<TextInput>()

  const [showPassword, setShowPassword] = useState(false)

  const focusPasswordInput = useCallback(() => refPasswordInput.current?.focus(), [])

  const onSubmit = useCallback(() => {}, [])

  const toggleShowPassword = useCallback(() => setShowPassword((prev) => !prev), [])

  return (
    <Box flex={1} p={6} safeAreaTop>
      <HStack>
        <IconButton
          borderRadius="full"
          colorScheme="blueGray"
          icon={<Icons.ArrowLeft color="blueGray.400" size={6} />}
          onPress={navigation.goBack}
          ml={-2}
        />
      </HStack>
      <VStack mt={10} space={4}>
        <Heading fontSize="2xl" fontWeight="semibold" lineHeight="md">
          Welcome Back!
        </Heading>
        <Text fontSize="sm" fontWeight="normal" lineHeight="lg" _light={{ opacity: 0.6 }}>
          Login and start manage your bookmark
        </Text>
      </VStack>
      <Box flex={1} justifyContent="flex-end">
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
        <VStack my={10} space={10}>
          <HStack justifyContent="center">
            <Text fontSize="xs" fontWeight="medium" lineHeight="md">
              {`Forget your password? `}
            </Text>
            <TouchableOpacity>
              <Text color="indigo.500" fontSize="xs" fontWeight="medium" lineHeight="md">
                Reset password
              </Text>
            </TouchableOpacity>
          </HStack>
          <HStack justifyContent="center">
            <Text fontSize="xs" fontWeight="medium" lineHeight="md">
              {`Don’t have an account? `}
            </Text>
            <TouchableOpacity>
              <Text color="indigo.500" fontSize="xs" fontWeight="medium" lineHeight="md">
                Register
              </Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
        <Button>Log In</Button>
      </Box>
    </Box>
  )
}
