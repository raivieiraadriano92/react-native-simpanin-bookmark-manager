import { Insets } from 'react-native'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      blue: string
      error: string
      pink: string
      primary: string
      purple: string
      success: string
      systemBackgroundPrimary: string
      systemBackgroundSecondary: string
      systemLine: string
      text: string
      transparent: string
      yellow: string
      white: string
    }
    hitSlop: Insets
    spacing: {
      [K in 'tinyest' | 'tiny' | 'small' | 'medium' | 'large']: number
    }
  }
}
