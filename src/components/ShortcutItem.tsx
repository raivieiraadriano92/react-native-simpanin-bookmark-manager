import { FunctionComponent, useMemo } from 'react'

import { Center, Pressable, Text, themeTools, useTheme, VStack } from 'native-base'

import Icons from './Icons'

export type Shortcut = {
  color: string
  icon: keyof typeof Icons
  title: string
}

type ShortcutItemProps = Shortcut & {
  onPress(): void
}

export const ShortcutItem: FunctionComponent<ShortcutItemProps> = ({
  color,
  icon,
  onPress,
  title
}) => {
  const IconComponent = useMemo(() => Icons[icon], [icon])

  const theme = useTheme()

  return (
    <Pressable {...{ onPress }}>
      {({ isPressed }) => (
        <VStack space={2}>
          <Center
            bg={themeTools.transparentize(color, isPressed ? 0.4 : 0.2)(theme)}
            borderRadius="2xl"
            h={24}
            w={24}>
            <IconComponent size={12} />
          </Center>
          <Text fontSize="sm" fontWeight="medium" lineHeight="lg">
            {title}
          </Text>
        </VStack>
      )}
    </Pressable>
  )
}
