import { useCallback, useRef } from 'react'

import { Button, FormControl, Heading, ScrollView, Text, Toast, VStack } from 'native-base'
import { useForm, Controller } from 'react-hook-form'
import { TextInput } from 'react-native'
import { InputPassword } from 'src/components'
import { RootStackScreenComponent } from 'src/navigation'
import { supabase } from 'src/services/supabase'

type FormData = {
  password: string
  confirmPassword: string
}

export const NewPasswordScreen: RootStackScreenComponent<'NewPassword'> = ({
  navigation,
  route
}) => {
  const refConfirmPasswordInput = useRef<TextInput>(null)

  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormData>({
    defaultValues: {
      password: '12344321',
      confirmPassword: '12344321'
    }
  })

  const focusConfirmPasswordInput = useCallback(() => refConfirmPasswordInput.current?.focus(), [])

  const submit = handleSubmit(
    useCallback(
      async ({ password }) => {
        const { error } = await supabase.auth.api.updateUser(route.params.token, {
          password
        })

        if (error) {
          Toast.show({
            title: 'Something went wrong',
            status: 'error',
            description: error.message
          })

          return
        }

        Toast.show({
          description: 'New password saved successfully.',
          status: 'success',
          title: ':)'
        })

        navigation.reset({
          index: 0,
          routes: [{ name: 'Onboarding' }, { name: 'LogIn' }]
        })
      },
      [navigation, route.params.token]
    )
  )

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
                  onSubmitEditing={focusConfirmPasswordInput}
                  placeholder="Type your password"
                  returnKeyType="next"
                  variant="filled"
                />
                {!!errors.password && (
                  <FormControl.ErrorMessage>{errors.password?.message}</FormControl.ErrorMessage>
                )}
              </FormControl>
            )}
            name="password"
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
              <FormControl isInvalid={!!errors.confirmPassword} isRequired>
                <FormControl.Label>Confirm password</FormControl.Label>
                <InputPassword
                  {...{ onChangeText, onBlur, value }}
                  enablesReturnKeyAutomatically
                  onSubmitEditing={submit}
                  placeholder="Type your password"
                  ref={refConfirmPasswordInput}
                  returnKeyType="go"
                  variant="filled"
                />
                {!!errors.confirmPassword && (
                  <FormControl.ErrorMessage>
                    {errors.confirmPassword?.message}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>
            )}
            name="password"
          />
        </VStack>
        <Button isLoading={isSubmitting} onPress={submit}>
          Reset password
        </Button>
      </VStack>
    </ScrollView>
  )
}
