import { extendTheme } from 'native-base'

import { colors } from './colors'
import { Button } from './components/button'
import { Heading } from './components/heading'
import { Text } from './components/text'
import { typography } from './typography'

export const theme = extendTheme({
  colors,
  components: { Button, Heading, Text },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light'
  },
  ...typography
})

// Extend the internal NativeBase Theme
type CustomThemeType = typeof theme

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
