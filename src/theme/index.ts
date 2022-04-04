import { extendTheme } from 'native-base'
import { Platform } from 'react-native'

import { colors } from './colors'
import { Button } from './components/button'
import { FormControlLabel } from './components/form-control'
import { Heading } from './components/heading'
import { Input } from './components/input'
import { Text } from './components/text'
import { sizes } from './sizes'
import { spacing } from './space'
import { typography } from './typography'

export const theme = extendTheme({
  colors,
  components: { Button, FormControlLabel, Heading, Input, Text },
  config: {
    useSystemColorMode: false,
    initialColorMode: Platform.OS === 'ios' ? 'dark' : 'light'
  },
  sizes,
  space: spacing,
  ...typography
})

// Extend the internal NativeBase Theme
type CustomThemeType = typeof theme

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
