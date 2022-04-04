import { FunctionComponent } from 'react'

import { HStack, Image, Text, VStack } from 'native-base'
import { TouchableOpacity } from 'react-native'

import { Collection } from './CollectionItem'
import Icons from './Icons'

export type Bookmark = {
  collection: Collection
  date: string
  subtitle: string
  title: string
}

type BookmarkItemProps = Bookmark & {
  index: number
  onPress(): void
}

export const BookmarkItem: FunctionComponent<BookmarkItemProps> = ({
  collection,
  date,
  index,
  onPress,
  subtitle,
  title
}) => {
  return (
    <TouchableOpacity {...{ onPress }} activeOpacity={0.7}>
      <HStack
        {...(index
          ? {
              borderTopWidth: 1,
              pt: 4,
              _dark: { borderTopColor: 'darkBackgroundSecondary' },
              _light: { borderTopColor: 'gray.100' }
            }
          : {})}
        space={3}>
        <Image
          alt={title}
          borderRadius="xl"
          size={13}
          source={{
            uri: 'https://wallpaperaccess.com/full/317501.jpg'
          }}
        />
        <VStack flex={1} space={1}>
          <Text fontSize="sm" fontWeight="medium" lineHeight="lg">
            {title}
          </Text>
          <Text fontSize="xs" fontWeight="normal" lineHeight="md">
            {subtitle}
          </Text>
          <HStack space={2}>
            <Text fontSize="xs">{collection.emoji}</Text>
            <Text fontSize="xs" fontWeight="normal" lineHeight="md" opacity={0.6}>
              {collection.title}
            </Text>
            <Text fontSize="xs" fontWeight="normal" lineHeight="md" opacity={0.6}>
              {date}
            </Text>
          </HStack>
        </VStack>
        <Icons.More size={4} />
      </HStack>
    </TouchableOpacity>
  )
}
