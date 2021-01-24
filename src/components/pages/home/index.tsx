import React, { ReactNode, useState } from 'react'
import { FlatList, Image, TouchableOpacity } from 'react-native'
import { DefaultTheme, useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import normalize from 'react-native-normalize'

import { Flex, Icon, Text } from 'src/components/atoms'
import { Button, Input, ScrollViewFaded } from 'src/components/molecules'
import { Header } from 'src/components/organisms'
import { useGeneralContext } from 'src/contexts/general'
import { TabNavigator } from 'src/navigator/tab-navigator'
import { hexToRgba } from 'src/utils'

import SearchModal from './search-modal'

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

const collections: {
  count: number
  emoji: string
  key: string
  name: string
}[] = [
  {
    count: 32,
    emoji: '🌈',
    key: '1',
    name: 'Inspiration'
  },
  {
    count: 163,
    emoji: '😻',
    key: '2',
    name: 'Catboosters'
  },
  {
    count: 26,
    emoji: '📚',
    key: '3',
    name: 'Brain Foods'
  },
  {
    count: 32,
    emoji: '🌈',
    key: '4',
    name: 'Inspiration'
  },
  {
    count: 163,
    emoji: '😻',
    key: '5',
    name: 'Catboosters'
  },
  {
    count: 26,
    emoji: '📚',
    key: '6',
    name: 'Brain Foods'
  }
]

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
  const generalContext = useGeneralContext()

  const navigation = useNavigation<BottomTabNavigationProp<TabNavigator>>()

  const [searchModalVisible, setSearchModalVisible] = useState(false)

  const theme = useTheme()

  return (
    <>
      <Header title={`Hello, ${generalContext.user?.name}!`} />
      <ScrollViewFaded
        colors={{
          bottom: [
            hexToRgba(theme.colors.systemBackgroundPrimary, 0),
            theme.colors.systemBackgroundPrimary
          ],
          top: [
            theme.colors.systemBackgroundPrimary,
            hexToRgba(theme.colors.systemBackgroundPrimary, 0)
          ]
        }}
        disableTopInset
      >
        <Flex marginBottom="large" marginHorizontal="medium">
          <Input
            left={iconProps => <Icon.Search {...iconProps} />}
            placeholder="Search your bookmark"
          />
          <TouchableOpacity
            onPress={() => {
              setSearchModalVisible(true)
            }}
            style={{
              backgroundColor: theme.colors.transparent,
              position: 'absolute',
              height: '100%',
              width: '100%'
            }}
          />
        </Flex>
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
        <Flex
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
          paddingTop="large"
          paddingHorizontal="medium"
          paddingBottom="medium"
        >
          <Text type="h4">My Collections</Text>
          <Button
            onPress={() => {
              navigation.jumpTo('Collections')
            }}
            size="small"
            title="See All"
            type="tertiary"
          />
        </Flex>
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.medium
          }}
          data={collections}
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
                    backgroundColor: hexToRgba(theme.colors.yellow, 0.4),
                    borderRadius: 18,
                    height: 112,
                    justifyContent: 'center',
                    marginBottom: theme.spacing.small,
                    width: 114
                  }}
                >
                  <Icon.ColoredFolder size={48} />
                  <Flex
                    style={{ left: '50%', position: 'absolute', top: '50%' }}
                  >
                    <Text type="h3">{item.emoji}</Text>
                  </Flex>
                </Flex>
                <Text type="body1">{item.name}</Text>
                <Flex paddingTop="tinyest">
                  <Text alpha={0.6} type="body2">
                    {`${item.count} items`}
                  </Text>
                </Flex>
              </Flex>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <Flex
          paddingTop="large"
          paddingHorizontal="medium"
          paddingBottom="medium"
        >
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
              </Flex>
            </TouchableOpacity>
          ))}
        </Flex>
      </ScrollViewFaded>
      <SearchModal
        close={() => setSearchModalVisible(false)}
        visible={searchModalVisible}
      />
    </>
  )
}
