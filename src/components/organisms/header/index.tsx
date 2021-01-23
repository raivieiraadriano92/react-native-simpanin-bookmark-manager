import React, { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Flex, Icon, Text } from 'src/components/atoms'

type Props = {
  goBack?(): void
  right?: ReactNode
  subtitle?: string
  title?: string
}

export default function ({
  goBack,
  right,
  subtitle,
  title
}: Props): JSX.Element {
  return (
    <SafeAreaView edges={['top']}>
      <Flex alignItems="center" flexDirection="row" padding="medium">
        {!!goBack && (
          <Flex marginRight="small">
            <TouchableOpacity onPress={goBack}>
              <Icon.ArrowLeft alpha={0.6} />
            </TouchableOpacity>
          </Flex>
        )}
        {!!title && !subtitle && (
          <Text flexWrap="wrap" type="h3">
            {title}
          </Text>
        )}
        {right}
      </Flex>
      {!!subtitle && (
        <Flex padding="medium">
          {!!title && <Text type="h3">{title}</Text>}
          {!!subtitle && (
            <Flex paddingTop="small">
              <Text type="body2">{subtitle}</Text>
            </Flex>
          )}
        </Flex>
      )}
    </SafeAreaView>
  )
}
