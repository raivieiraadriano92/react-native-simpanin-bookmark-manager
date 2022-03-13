import { FunctionComponent } from 'react'

import { NativeBaseProvider } from 'native-base'
import { enableFreeze } from 'react-native-screens'
import { theme } from 'src/theme'

import { Navigation } from './navigation'

enableFreeze(true)

const initialWindowMetrics = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 }
}

export const App: FunctionComponent = () => (
  <NativeBaseProvider
    config={{ suppressColorAccessibilityWarning: true }}
    initialWindowMetrics={initialWindowMetrics}
    theme={theme}>
    <Navigation />
  </NativeBaseProvider>
)
