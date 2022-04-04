import { FunctionComponent } from 'react'

import { BlurView } from 'expo-blur'
import { Box, Factory, HStack, IconButton, Text, VStack } from 'native-base'
import { Platform } from 'react-native'

import Icons from './Icons'

type TabItem = {
  icon: keyof typeof Icons
  title?: string
}

const items: TabItem[] = [
  {
    icon: 'Home',
    title: 'Home'
  },
  {
    icon: 'Bookmark',
    title: 'Bookmarks'
  },
  {
    icon: 'Plus'
  },
  {
    icon: 'Collection',
    title: 'Collections'
  },
  {
    icon: 'Settings',
    title: 'Settings'
  }
]

const activeIndex = 0

export const TABBAR_HEIGHT_TOKEN = 17

const FactoryBlurView = Factory(BlurView)

const Container: FunctionComponent = ({ children }) => {
  const props = {
    alignItems: 'center',
    bottom: 0,
    h: TABBAR_HEIGHT_TOKEN,
    justifyContent: 'space-evenly',
    position: 'absolute',
    w: 'full'
  }

  if (Platform.OS === 'ios') {
    return (
      <FactoryBlurView
        {...props}
        flexDirection="row"
        intensity={80}
        _dark={{ tint: 'dark' }}
        _light={{ tint: 'light' }}>
        {children}
      </FactoryBlurView>
    )
  }

  return (
    <HStack
      {...props}
      _dark={{ bg: 'darkBackgroundSecondary' }}
      _light={{ bg: 'lightBackgroundSecondary' }}>
      {children}
    </HStack>
  )
}

export const Tabbar: FunctionComponent = ({}) => {
  return (
    <Container>
      {items.map((item, index) => {
        const color = activeIndex === index ? 'primary.500' : 'blueGray.400'

        const IconComponent = Icons[item.icon]

        return (
          <Box key={item.icon}>
            {item.icon === 'Plus' ? (
              <IconButton
                borderColor="primary.500"
                borderWidth={1.5}
                borderRadius="xl"
                colorScheme="primary"
                icon={<IconComponent color="primary.500" size={6} />}
              />
            ) : (
              <VStack alignItems="center">
                <IconComponent
                  {...(activeIndex === index ? { strokeWidth: 2 } : {})}
                  color={color}
                  size={6}
                />
                <Text
                  color={color}
                  fontSize="2xs"
                  fontWeight={activeIndex === index ? 'semibold' : 'normal'}
                  lineHeight="md"
                  opacity={0.6}>
                  {item.title}
                </Text>
              </VStack>
            )}
          </Box>
        )
      })}
    </Container>
  )
}
