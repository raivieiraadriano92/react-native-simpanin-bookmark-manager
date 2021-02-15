import React, { ReactNode } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { DefaultTheme, useTheme } from 'styled-components/native'

import { Flex, Icon, Text } from 'src/components/atoms'
import { hexToRgba } from 'src/utils'

const categories: {
  color: keyof DefaultTheme['colors']
  key: string
  icon: ReactNode
  name: string
}[] = [
  {
    color: 'purple',
    key: '1',
    icon: <Icon.CategoryLinks size={48} />,
    name: 'Links'
  },
  {
    color: 'blue',
    key: '2',
    icon: <Icon.CategoryImages size={48} />,
    name: 'Images'
  },
  {
    color: 'pink',
    key: '3',
    icon: <Icon.CategoryFavorites size={48} />,
    name: 'Documents'
  },
  {
    color: 'primary',
    key: '4',
    icon: <Icon.CategoryVideos size={48} />,
    name: 'Videos'
  },
  {
    color: 'error',
    key: '5',
    icon: <Icon.CategoryDocuments size={48} />,
    name: 'Favorites'
  }
]

export default function (): JSX.Element {
  const theme = useTheme()

  return (
    <FlatList
      contentContainerStyle={{
        paddingHorizontal: theme.spacing.medium
      }}
      data={categories}
      keyExtractor={item => item.key}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            //
          }}
        >
          <Flex paddingRight="small">
            <Flex
              style={{
                alignItems: 'center',
                backgroundColor: hexToRgba(theme.colors[item.color], 0.2),
                borderRadius: 18,
                height: 96,
                justifyContent: 'center',
                marginBottom: theme.spacing.small,
                width: 98
              }}
            >
              {item.icon}
            </Flex>
            <Text type="body1">{item.name}</Text>
          </Flex>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
    />
  )
}
