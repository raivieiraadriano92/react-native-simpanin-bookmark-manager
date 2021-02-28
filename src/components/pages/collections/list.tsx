import React from 'react'
import { FlatList } from 'react-native'
import { useTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'

import { Flex, Icon, Text } from 'src/components/atoms'
import { ListItem } from 'src/components/molecules/'
import { hexToRgba } from 'src/utils'

type Props = {
  data: {
    count: number
    emoji: string
    id: number
    name: string
  }[]
  grid?: boolean
}

export default function ({ data, grid = false }: Props): JSX.Element {
  const theme = useTheme()

  return (
    <FlatList
      {...{ data }}
      numColumns={grid ? 2 : 1}
      keyExtractor={(item, index) => `${item.id + index}`}
      renderItem={({ index, item }) => (
        <Flex
          {...(grid
            ? {
                ...(index % 2 === 0
                  ? { paddingLeft: 'medium', paddingRight: 'small' }
                  : { paddingRight: 'medium' })
              }
            : { paddingHorizontal: 'medium' })}
          flex={grid}
        >
          <ListItem
            {...{ grid, index }}
            alignItems="center"
            label={`${item.count} items`}
            onPress={() => {
              //
            }}
            renderImage={({ size }) => (
              <Flex
                style={{
                  alignItems: 'center',
                  backgroundColor: hexToRgba(theme.colors.yellow, 0.4),
                  borderRadius: normalize(18),
                  height: grid ? size : normalize(64),
                  justifyContent: 'center',
                  width: grid ? size : normalize(64)
                }}
              >
                <Icon.ColoredFolder size={grid ? 56 : 32} />
                <Flex
                  style={{
                    left: '50%',
                    position: 'absolute',
                    top: '50%'
                  }}
                >
                  <Text type={grid ? 'h3' : 'body1'}>{item.emoji}</Text>
                </Flex>
              </Flex>
            )}
            title={item.name}
          />
        </Flex>
      )}
    />
  )
}
