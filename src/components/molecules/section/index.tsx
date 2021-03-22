import React, { PropsWithChildren, ReactNode } from 'react'
import { DefaultTheme } from 'styled-components/native'

import { Flex, Text } from 'src/components/atoms'
import { Props as TextProps } from 'src/components/atoms/text'

type Props = PropsWithChildren<{
  actions?: ReactNode[]
  title: string
  titlePaddingHorizontal: keyof DefaultTheme['spacing']
  titleType?: TextProps['type']
}>

export default function ({
  actions,
  children,
  title,
  titlePaddingHorizontal,
  titleType
}: Props): JSX.Element {
  return (
    <>
      <Flex
        {...(titlePaddingHorizontal
          ? { paddingHorizontal: titlePaddingHorizontal }
          : {})}
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        paddingBottom="small"
      >
        <Text type={titleType || 'h4'}>{title}</Text>
        <Flex alignItems="center" flexDirection="row">
          {actions?.map(action => action)}
        </Flex>
      </Flex>
      {children}
    </>
  )
}
