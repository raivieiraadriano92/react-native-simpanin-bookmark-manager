import { FunctionComponent } from 'react'

import { Center, Text, VStack, themeTools, useTheme, Pressable } from 'native-base'

import Icons from './Icons'

export type Collection = {
  emoji: string
  title: string
}

type CollectionItemProps = Collection & {
  onPress(): void
}

export const CollectionItem: FunctionComponent<CollectionItemProps> = ({
  emoji,
  onPress,
  title
}) => {
  const theme = useTheme()

  return (
    <Pressable {...{ onPress }}>
      {({ isPressed }) => (
        <VStack space={2}>
          <Center
            borderRadius="2xl"
            h={28}
            w={28}
            _dark={{ bg: themeTools.transparentize('yellow.200', isPressed ? 0.5 : 0.2)(theme) }}
            _light={{ bg: themeTools.transparentize('yellow.200', isPressed ? 0.7 : 0.4)(theme) }}>
            <Icons.Folder size={12} />
            <Text fontSize="lg" left={14} top={14} position="absolute">
              {emoji}
            </Text>
          </Center>
          <Text fontSize="sm" fontWeight="medium" lineHeight="lg">
            {title}
          </Text>
        </VStack>
      )}
    </Pressable>
  )
}
