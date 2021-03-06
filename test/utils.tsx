import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import theme from '../src/theme'

const AllTheProviders = ({
  children
}: PropsWithChildren<{
  //
}>) => {
  return (
    <SafeAreaProvider>
      <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
    </SafeAreaProvider>
  )
}

const customRender: typeof render = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
