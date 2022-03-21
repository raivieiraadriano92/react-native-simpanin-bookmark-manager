import { ExpoConfig } from '@expo/config-types'

const config: ExpoConfig = {
  name: 'react-native-simpanin-bookmark-manager',
  slug: 'react-native-simpanin-bookmark-manager',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    }
  },
  web: {
    favicon: './assets/favicon.png'
  },
  scheme: 'simpanin',
  jsEngine: 'hermes'
}

export default config
