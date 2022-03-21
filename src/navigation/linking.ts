import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { AuthStackParamList } from './types'

export const linking: LinkingOptions<AuthStackParamList> = {
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
