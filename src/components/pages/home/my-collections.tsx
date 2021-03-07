import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { Flex, Icon, Text } from 'src/components/atoms'
import { Button } from 'src/components/molecules'
import { TabNavigator } from 'src/navigator/logged-navigator/tab-navigator'
import { hexToRgba } from 'src/utils'

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

export default function (): JSX.Element {
  const navigation = useNavigation<BottomTabNavigationProp<TabNavigator>>()

  const theme = useTheme()

  return (
    <>
      <Flex
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        paddingTop="large"
        paddingHorizontal="medium"
        paddingBottom="small"
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
                <Flex style={{ left: '50%', position: 'absolute', top: '50%' }}>
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
    </>
  )
}
