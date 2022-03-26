import { useCallback, useMemo, useRef } from 'react'

import { Button, FormControl, Heading, Input, ScrollView, Text, Toast, VStack } from 'native-base'
import { useForm, Controller } from 'react-hook-form'
import { TextInput } from 'react-native'
import { InputPassword } from 'src/components'
import { RootStackScreenComponent } from 'src/navigation'
import { supabase } from 'src/services/supabase'

type FormData = {
  email: string
  password: string
}

export const LogInScreen: RootStackScreenComponent<'LogIn'> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormData>({
    defaultValues: {
      email: 'raivieiraadriano92@gmail.com',
      password: '12345678'
    }
  })

  const refPasswordInput = useRef<TextInput>(null)

  const goTo = useMemo(
    () => ({
      resetPasswordScreen: () => navigation.navigate('ResetPassword'),
      registerScreen: () => navigation.navigate('Register')
    }),
    [navigation]
  )

  const focusPasswordInput = useCallback(() => refPasswordInput.current?.focus(), [])

  const submit = handleSubmit(
    useCallback(async ({ email, password }) => {
      const { error } = await supabase.auth.signIn({
        email,
        password
      })

      if (error) {
        Toast.show({
          title: 'Something went wrong',
          status: 'error',
          description: error.message
        })
      }
    }, [])
  )

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
            <Controller
              control={control}
              rules={{
                required: 'Required field'
              }}
              render={({
                field: { onChange: onChangeText, onBlur, value },
                formState: { errors }
              }) => (
                <FormControl isInvalid={!!errors.email} isRequired>
                  <FormControl.Label>Email</FormControl.Label>
                  <Input
                    {...{ onChangeText, onBlur, value }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    enablesReturnKeyAutomatically
                    keyboardType="email-address"
                    onSubmitEditing={focusPasswordInput}
                    placeholder="Type your email"
                    returnKeyType="next"
                    variant="filled"
                  />
                  {!!errors.email && (
                    <FormControl.ErrorMessage>{errors.email?.message}</FormControl.ErrorMessage>
                  )}
                </FormControl>
              )}
              name="email"
            />
            <Controller
              control={control}
              rules={{
                required: 'Required field'
              }}
              render={({
                field: { onChange: onChangeText, onBlur, value },
                formState: { errors }
              }) => (
                <FormControl isInvalid={!!errors.password} isRequired>
                  <FormControl.Label>Password</FormControl.Label>
                  <InputPassword
                    {...{ onChangeText, onBlur, value }}
                    enablesReturnKeyAutomatically
                    placeholder="Type your password"
                    ref={refPasswordInput}
                    returnKeyType="go"
                    variant="filled"
                  />
                  {!!errors.password && (
                    <FormControl.ErrorMessage>{errors.password?.message}</FormControl.ErrorMessage>
                  )}
                </FormControl>
              )}
              name="password"
            />
          </VStack>
          <VStack space={4}>
            <Button isLoading={isSubmitting} onPress={submit}>
              Log In
            </Button>
            <Button onPress={goTo.resetPasswordScreen} size="sm" variant="ghost">
              Reset password
            </Button>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  )
}
