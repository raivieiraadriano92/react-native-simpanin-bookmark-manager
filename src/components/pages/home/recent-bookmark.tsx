import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'

import { Flex, Icon, Text } from 'src/components/atoms'

const recent: {
  collection: string
  date: string
  description: string
  emoji: string
  key: string
  image: string
  name: string
}[] = [
  {
    collection: 'Inspiration',
    date: '12:21',
    description: 'UI & UX Design Inspiration',
    emoji: '🌈',
    key: '1',
    image: 'https://niteco.com/globalassets/episerver-design.jpg',
    name: 'Top UI/UX Design Works for Inspiration'
  },
  {
    collection: 'Inspiration',
    date: '12:21',
    description: 'UI & UX Design Inspiration',
    emoji: '😻',
    key: '2',
    image: 'https://niteco.com/globalassets/episerver-design.jpg',
    name: 'Top UI/UX Design Works for Inspiration'
  },
  {
    collection: 'Inspiration',
    date: '12:21',
    description: 'UI & UX Design Inspiration',
    emoji: '📚',
    key: '3',
    image: 'https://niteco.com/globalassets/episerver-design.jpg',
    name: 'Top UI/UX Design Works for Inspiration'
  }
]

export default function (): JSX.Element {
  const theme = useTheme()

  return (
    <>
      <Flex paddingTop="large" paddingHorizontal="medium" paddingBottom="small">
        <Text type="h4">Recent bookmark</Text>
      </Flex>
      <Flex paddingHorizontal="medium">
        {recent.map(item => (
          <TouchableOpacity
            key={item.key}
            onPress={() => {
              //
            }}
            style={{
              borderBottomColor: theme.colors.systemBackgroundSecondary,
              borderBottomWidth: 1,
              marginBottom: theme.spacing.small,
              paddingBottom: theme.spacing.small
            }}
          >
            <Flex flexDirection="row">
              <Image
                source={{
                  uri: item.image
                }}
                style={{
                  borderRadius: normalize(12),
                  height: 52,
                  width: 52
                }}
              />
              <Flex flex paddingLeft="small">
                <Text type="body1">{item.name}</Text>
                <Flex paddingTop="tinyest">
                  <Text alpha={0.6} type="body2">
                    {item.description}
                  </Text>
                </Flex>
                <Flex
                  alignItems="center"
                  flexDirection="row"
                  paddingTop="tinyest"
                >
                  <Flex paddingRight="tiny">
                    <Text type="body2">{item.emoji}</Text>
                  </Flex>
                  <Text alpha={0.4} type="body3">
                    {item.collection}
                  </Text>
                  <Flex paddingHorizontal="tiny">
                    <Icon.Dot alpha={0.4} />
                  </Flex>
                  <Text alpha={0.4} type="body3">
                    {item.date}
                  </Text>
                </Flex>
              </Flex>
              <Icon.MoreHorizontal />
            </Flex>
          </TouchableOpacity>
        ))}
      </Flex>
    </>
  )
}
