import { Heading, HStack, Input, ScrollView, VStack } from 'native-base'
import {
  Bookmark,
  BookmarkItem,
  Collection,
  CollectionItem,
  Icons,
  Shortcut,
  ShortcutItem
} from 'src/components'
import { RootStackScreenComponent } from 'src/navigation'

const bookmarks: Bookmark[] = [
  {
    collection: {
      emoji: '🌈',
      title: 'Inspiration'
    },
    date: '12:21',
    subtitle: 'UI & UX Design Inspiration',
    title: 'Top UI/UX Design Works for Inspiration'
  },
  {
    collection: {
      emoji: '📘',
      title: 'Unsorted'
    },
    date: '11:10',
    subtitle: 'Medium',
    title: '3 tips for research newbies'
  },
  {
    collection: {
      emoji: '📘',
      title: 'Unsorted'
    },
    date: '07:32',
    subtitle: 'Reddit',
    title: 'High quality wallpapers'
  },
  {
    collection: {
      emoji: '😻',
      title: 'Catboosters'
    },
    date: 'Yesterday',
    subtitle: 'Boredpanda',
    title: '30 Times Cats Cracked Us Up'
  },
  {
    collection: {
      emoji: '📚',
      title: 'Brain Foods'
    },
    date: 'Yesterday',
    subtitle: 'Smashing Magazine',
    title: 'Color Theory for Designers'
  }
]

const collections: Collection[] = [
  {
    emoji: '🌈',
    title: 'Inspiration'
  },
  {
    emoji: '😻',
    title: 'Catboosters'
  },
  {
    emoji: '📚',
    title: 'Brain Foods'
  },
  {
    emoji: '👽',
    title: 'Conspiration'
  }
]

const shortcuts: Shortcut[] = [
  {
    color: 'purple.400',
    icon: 'Link',
    title: 'Links'
  },
  {
    color: 'lightBlue.300',
    icon: 'Image',
    title: 'Images'
  },
  {
    color: 'rose.300',
    icon: 'Document',
    title: 'Documents'
  },
  {
    color: 'red.400',
    icon: 'Favorite',
    title: 'Favorites'
  },
  {
    color: 'indigo.400',
    icon: 'Video',
    title: 'Video'
  }
]

export const HomeScreen: RootStackScreenComponent<'Home'> = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} _contentContainerStyle={{ flexGrow: 1 }}>
      <VStack flex={1} py={6} safeArea space={8}>
        <VStack px={6} space={8}>
          <Heading fontSize="2xl" fontWeight="semibold" lineHeight="md">
            Hello, John Doe!
          </Heading>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically
            leftElement={<Icons.Search color="blueGray.500" ml={3} size={6} />}
            placeholder="Search your bookmark"
            returnKeyType="search"
            variant="filled"
          />
        </VStack>
        <VStack space={8}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{ px: 6 }}>
            <HStack space={4}>
              {shortcuts.map((item) => (
                <ShortcutItem {...item} key={item.title} onPress={() => {}} />
              ))}
            </HStack>
          </ScrollView>
          <VStack space={4}>
            <Heading fontSize="lg" fontWeight="semibold" lineHeight="md" ml={6}>
              My Collections
            </Heading>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              _contentContainerStyle={{ px: 6 }}>
              <HStack space={4}>
                {collections.map((item) => (
                  <CollectionItem {...item} key={item.title} onPress={() => {}} />
                ))}
              </HStack>
            </ScrollView>
          </VStack>
          <VStack px={6} space={4}>
            <Heading fontSize="lg" fontWeight="semibold" lineHeight="md">
              Recent bookmark
            </Heading>
            {bookmarks.map((item, index) => (
              <BookmarkItem {...{ ...item, index }} key={item.title} onPress={() => {}} />
            ))}
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  )
}
