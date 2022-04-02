import { useCallback, useRef } from 'react'

import { Button, FormControl, Heading, Input, ScrollView, Text, Toast, VStack } from 'native-base'
import { useForm, Controller } from 'react-hook-form'
import { TextInput } from 'react-native'
import { InputPassword } from 'src/components'
import { RootStackScreenComponent } from 'src/navigation'
import { supabase } from 'src/services/supabase'

type FormData = {
  email: string
  full_name: string
  password: string
}

export const RegisterScreen: RootStackScreenComponent<'Register'> = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormData>({
    defaultValues: {
      email: 'raivieiraadriano92@gmail.com',
      full_name: 'Raí Adriano',
      password: '12345678'
    }
  })

  const refEmailInput = useRef<TextInput>()

  const refPasswordInput = useRef<TextInput>(null)

  const focusEmailInput = useCallback(() => refEmailInput.current?.focus(), [])

  const focusPasswordInput = useCallback(() => refPasswordInput.current?.focus(), [])

  const submit = handleSubmit(
    useCallback(async ({ email, full_name, password }) => {
      const { error } = await supabase.auth.signUp(
        {
          email,
          password
        },
        { data: { full_name } }
      )

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
            Join with us!
          </Heading>
          <Text fontSize="sm" fontWeight="normal" lineHeight="lg" _light={{ opacity: 0.6 }}>
            Register to enjoy our best features
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
                <FormControl isInvalid={!!errors.full_name} isRequired>
                  <FormControl.Label>Full name</FormControl.Label>
                  <Input
                    {...{ onChangeText, onBlur, value }}
                    autoCapitalize="words"
                    enablesReturnKeyAutomatically
                    onSubmitEditing={focusEmailInput}
                    placeholder="Type your name"
                    returnKeyType="next"
                    variant="filled"
                  />
                  {!!errors.full_name && (
                    <FormControl.ErrorMessage>{errors.full_name?.message}</FormControl.ErrorMessage>
                  )}
                </FormControl>
              )}
              name="full_name"
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
                    ref={refEmailInput}
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
                    onSubmitEditing={submit}
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
            <Text fontSize="sm" fontWeight="normal" lineHeight="lg" _light={{ opacity: 0.6 }}>
              By pressing “Register Now” button you agree to our Terms of Use and Privacy Policy.
            </Text>
          </VStack>
          <Button isLoading={isSubmitting} onPress={submit}>
            Register Now
          </Button>
        </VStack>
      </VStack>
    </ScrollView>
  )
}
