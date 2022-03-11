import { FunctionComponent } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../screens'
import { AppStackParamList } from './types'

const NativeStackNavigator = createNativeStackNavigator<AppStackParamList>()

export const AppStackNavigator: FunctionComponent = () => (
  <NativeStackNavigator.Navigator initialRouteName="Home">
    <NativeStackNavigator.Screen component={HomeScreen} name="Home" />
  </NativeStackNavigator.Navigator>
)
