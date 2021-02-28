import React, { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components/native'

import { Flex, Icon, Text } from 'src/components/atoms'

export type Props = {
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
  const insets = useSafeAreaInsets()

  const theme = useTheme()

  return (
    <Flex
      style={{
        backgroundColor: theme.colors.systemBackgroundPrimary,
        paddingTop: insets.top
      }}
    >
      <Flex
        alignItems="center"
        flexDirection="row"
        paddingHorizontal="medium"
        paddingTop="medium"
      >
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
        <Flex paddingHorizontal="medium" paddingTop="large">
          {!!title && <Text type="h3">{title}</Text>}
          {!!subtitle && (
            <Flex paddingTop="tiny">
              <Text type="body2">{subtitle}</Text>
            </Flex>
          )}
        </Flex>
      )}
    </Flex>
  )
}
