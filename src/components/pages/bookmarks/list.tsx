import React from 'react'

import { Flex, Icon, Text } from 'src/components/atoms'
import { ListItem } from 'src/components/molecules/'

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
  return (
    <>
      <Flex paddingHorizontal="medium" paddingBottom="small">
        <Text type="h4">Today</Text>
      </Flex>
      <Flex paddingHorizontal="medium">
        {recent.map((item, index) => (
          <ListItem
            {...{ index }}
            description={item.description}
            image={item.image}
            key={item.key}
            onPress={() => {
              //
            }}
            renderLabel={() => (
              <>
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
              </>
            )}
            title={item.name}
          />
        ))}
      </Flex>
      <Flex
        paddingBottom="small"
        paddingHorizontal="medium"
        paddingTop="medium"
      >
        <Text type="h4">Yesterday</Text>
      </Flex>
      <Flex paddingHorizontal="medium">
        {recent.map((item, index) => (
          <ListItem
            {...{ index }}
            description={item.description}
            image={item.image}
            key={item.key}
            onPress={() => {
              //
            }}
            renderLabel={() => (
              <>
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
              </>
            )}
            title={item.name}
          />
        ))}
      </Flex>
    </>
  )
}