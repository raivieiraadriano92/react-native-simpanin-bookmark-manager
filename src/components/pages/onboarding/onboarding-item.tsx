import React from 'react'
import { Image, useWindowDimensions } from 'react-native'

import { Flex, Text } from 'src/components/atoms'

import { Data } from './use-data'

type Props = { item: Data }

export default function ({ item }: Props): JSX.Element {
  const windowDimensions = useWindowDimensions()

  return (
    <Flex
      justifyContent="center"
      style={{
        width: windowDimensions.width
      }}
    >
      <Flex alignItems="center">
        <Image
          resizeMode="cover"
          source={item.image.source}
          style={{
            height: item.image.height,
            width: item.image.width
          }}
        />
      </Flex>
      <Flex paddingHorizontal="medium">
        <Text type="h3">{item.title}</Text>
        <Flex paddingTop="small">
          <Text alpha={0.6} type="body2">
            {item.description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
