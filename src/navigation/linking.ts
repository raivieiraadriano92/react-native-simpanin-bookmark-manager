import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { RootStackParamList } from './types'

export const linking: LinkingOptions<RootStackParamList> = {
  config: {
    initialRouteName: 'Onboarding',
    screens: {
      NewPassword: {
        path: 'create-new-password'
      }
    }
  },
  prefixes: [Linking.createURL('/'), 'https://simpanin.com.br']
}
