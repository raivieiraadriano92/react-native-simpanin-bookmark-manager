import { useCallback } from 'react'

import { Button, FormControl, Heading, Input, ScrollView, Text, Toast, VStack } from 'native-base'
import { useForm, Controller } from 'react-hook-form'
import { RootStackScreenComponent } from 'src/navigation'
import { supabase } from 'src/services/supabase'

type FormData = {
  email: string
  password: string
}

export const ResetPasswordScreen: RootStackScreenComponent<'ResetPassword'> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormData>({
    defaultValues: {
      email: 'raivieiraadriano92@gmail.com'
    }
  })

  const submit = handleSubmit(
    useCallback(
      async ({ email }) => {
        const { error } = await supabase.auth.api.resetPasswordForEmail(email, {
          redirectTo: `${process.env.BASE_URL_SITE}create-new-password`
        })

        if (error) {
          Toast.show({
            title: 'Something went wrong',
            status: 'error',
            description: error.message
          })

          return
        }

        navigation.navigate('ResetPasswordConfirmation')
      },
      [navigation]
    )
  )

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
          {/* <FormControl>
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
          </FormControl> */}
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
                  onSubmitEditing={submit}
                  placeholder="Type your email"
                  returnKeyType="send"
                  variant="filled"
                />
                {!!errors.email && (
                  <FormControl.ErrorMessage>{errors.email?.message}</FormControl.ErrorMessage>
                )}
              </FormControl>
            )}
            name="email"
          />
          <Button isLoading={isSubmitting} onPress={submit}>
            Send
          </Button>
        </VStack>
      </VStack>
    </ScrollView>
  )
}
