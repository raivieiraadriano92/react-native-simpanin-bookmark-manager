import React, { ReactNode } from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Flex, Icon, Text } from 'src/components/atoms'
import { Button, Input, ScrollViewFaded } from 'src/components/molecules'
import { Header } from 'src/components/organisms'
import { hexToRgba } from 'src/utils'

type Props = {
  close(): void
  visible: boolean
}

const categories: {
  key: string
  icon: ReactNode
  name: string
}[] = [
  {
    key: '1',
    icon: <Icon.CategoryLinks />,
    name: 'Links'
  },
  {
    key: '2',
    icon: <Icon.CategoryImages />,
    name: 'Images'
  },
  {
    key: '3',
    icon: <Icon.CategoryFavorites />,
    name: 'Documents'
  },
  {
    key: '4',
    icon: <Icon.CategoryVideos />,
    name: 'Videos'
  },
  {
    key: '5',
    icon: <Icon.CategoryDocuments />,
    name: 'Favorites'
  }
]

export default function ({ close, visible }: Props): JSX.Element {
  const theme = useTheme()

  return (
    <Modal {...{ visible }} animationType="fade" onRequestClose={close}>
      <Flex
        flex
        style={{ backgroundColor: theme.colors.systemBackgroundPrimary }}
      >
        <Header
          right={
            <Button
              onPress={close}
              left={() => <Icon.Close color="text" />}
              size="small"
              type="tertiary"
            />
          }
          title="Search"
        />
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
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.medium
          }}
          disableTopInset
        >
          <Flex marginBottom="large">
            <Input
              autoFocus
              left={iconProps => <Icon.Search {...iconProps} />}
              placeholder="Search your bookmark"
            />
          </Flex>
          {categories.map(item => (
            <TouchableOpacity
              key={item.key}
              onPress={() => {
                //
              }}
            >
              <Flex
                alignItems="center"
                flexDirection="row"
                paddingBottom="small"
              >
                {item.icon}
                <Flex paddingLeft="small">
                  <Text type="body1">{item.name}</Text>
                </Flex>
              </Flex>
            </TouchableOpacity>
          ))}
        </ScrollViewFaded>
      </Flex>
    </Modal>
  )
}
