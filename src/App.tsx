import { FunctionComponent } from 'react'

import { enableFreeze } from 'react-native-screens'

import { Navigation } from './navigation/Navigation'

enableFreeze(true)

export const App: FunctionComponent = () => <Navigation />
