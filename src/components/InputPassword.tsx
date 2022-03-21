import { forwardRef, useCallback, useState } from 'react'

import { IconButton, IInputProps, Input } from 'native-base'
import { TextInput } from 'react-native'

import Icons from './Icons'

export const InputPassword = forwardRef<TextInput, IInputProps>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = useCallback(() => setShowPassword((prev) => !prev), [])

  return (
    <Input
      ref={ref}
      rightElement={
        <IconButton
          borderRadius="full"
          colorScheme="blueGray"
          icon={<Icons.Eye closed={showPassword} color="blueGray.500" size={6} />}
          onPress={toggleShowPassword}
        />
      }
      type={showPassword ? 'text' : 'password'}
      {...props}
    />
  )
})
