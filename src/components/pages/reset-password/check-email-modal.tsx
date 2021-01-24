import React from 'react'
import { Image, Modal, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useTheme } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Assets from 'src/assets'
import { Flex, Text } from 'src/components/atoms'
import { Button } from 'src/components/molecules'
import { RootStackNavigator } from 'src/navigator'
import { resize } from 'src/utils'

type Props = {
  close(): void
  visible: boolean
}

const imageSize = resize({
  base: 'height',
  height: Assets.images.mailConfirmation.height,
  size: 220,
  width: Assets.images.mailConfirmation.width
})

export default function ({ close, visible }: Props): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigator>>()

  const theme = useTheme()

  return (
    <Modal {...{ visible }} animationType="fade" onRequestClose={close}>
      <SafeAreaView
        style={{
          backgroundColor: theme.colors.systemBackgroundPrimary,
          flex: 1
        }}
      >
        <Flex flex justifyContent="space-around" paddingHorizontal="medium">
          <Flex alignItems="center">
            <Image
              resizeMode="cover"
              source={Assets.images.mailConfirmation.source}
              style={{
                height: imageSize.height,
                width: imageSize.width
              }}
            />
            <Text textAlign="center" type="h3">
              Check your email
            </Text>
            <Flex paddingTop="small">
              <Text textAlign="center" type="body2">
                Please check your inbox and click in the received link to reset
                a password
              </Text>
            </Flex>
          </Flex>
          <Flex alignItems="center">
            <Text textAlign="center" type="body3">
              Did not receive the email? Check your spam filter,
            </Text>
            <Flex flexDirection="row">
              <Text textAlign="center" type="body3">
                {'or '}
              </Text>
              <TouchableOpacity onPress={close}>
                <Text color="primary" type="body3">
                  try another email address
                </Text>
              </TouchableOpacity>
            </Flex>
          </Flex>
        </Flex>
        <Flex paddingBottom="large" paddingHorizontal="medium">
          <Button
            onPress={() => {
              navigation.navigate('CreateNewPassword')
            }}
            title="Done"
          />
        </Flex>
      </SafeAreaView>
    </Modal>
  )
}
