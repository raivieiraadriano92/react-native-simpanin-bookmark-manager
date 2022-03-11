import { FunctionComponent } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

// ----- AuthStack -----

export type AuthStackParamList = {
  Onboarding: undefined
}

export type AuthStackScreenComponentProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>

export type AuthStackScreenComponent<RouteName extends keyof AuthStackParamList> =
  FunctionComponent<AuthStackScreenComponentProps<RouteName>>

// ----- AppStack -----

export type AppStackParamList = {
  Home: undefined
}

export type AppStackScreenComponentProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>

export type AppStackScreenComponent<RouteName extends keyof AppStackParamList> = FunctionComponent<
  AppStackScreenComponentProps<RouteName>
>
