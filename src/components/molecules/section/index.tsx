import React, { PropsWithChildren } from 'react'

import { Flex, Text } from 'src/components/atoms'
import { Props as TextProps } from 'src/components/atoms/text'

type Props = PropsWithChildren<{
  title: string
  titleType?: TextProps['type']
}>

export default function ({ children, title, titleType }: Props): JSX.Element {
  return (
    <>
      <Flex paddingBottom="small">
        <Text type={titleType || 'h4'}>{title}</Text>
      </Flex>
      {children}
    </>
  )
}
