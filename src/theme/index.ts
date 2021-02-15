import { Platform } from 'react-native'
import { DefaultTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'

export const fonts = {
  bold: `Manrope${Platform.OS === 'ios' ? '-' : '_'}Bold`,
  extraBold: `Manrope${Platform.OS === 'ios' ? '-' : '_'}ExtraBold`,
  extraLight: `Manrope${Platform.OS === 'ios' ? '-' : '_'}ExtraLight`,
  light: `Manrope${Platform.OS === 'ios' ? '-' : '_'}Light`,
  medium: `Manrope${Platform.OS === 'ios' ? '-' : '_'}Medium`,
  regular: `Manrope${Platform.OS === 'ios' ? '-' : '_'}Regular`,
  semiBold: `Manrope${Platform.OS === 'ios' ? '-' : '_'}SemiBold`
}

const spacing: DefaultTheme['spacing'] = {
  tinyest: normalize(4),
  tiny: normalize(8),
  small: normalize(16),
  medium: normalize(24),
  large: normalize(40)
}

const lightColors: DefaultTheme['colors'] = {
  black: '#000',
  blue: '#0099FF',
  error: '#FE5454',
  pink: '#FFB8C6',
  primary: '#5460FE',
  purple: '#BF84FF',
  success: '#6CDD8B',
  systemBackgroundPrimary: '#FFF',
  systemBackgroundSecondary: '#F5F8FD',
  systemLine: '#EEF2F9',
  text: '#051E56',
  transparent: 'transparent',
  yellow: '#FFD15F',
  white: '#FFF'
}

export const darkColors: DefaultTheme['colors'] = {
  ...lightColors,
  systemBackgroundPrimary: '#151835',
  systemBackgroundSecondary: '#272B54',
  text: lightColors.white
}

const theme: DefaultTheme = {
  colors: lightColors,
  hitSlop: {
    top: spacing.tiny,
    left: spacing.tiny,
    bottom: spacing.tiny,
    right: spacing.tiny
  },
  spacing
}

export default theme
