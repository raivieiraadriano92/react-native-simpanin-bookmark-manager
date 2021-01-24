import React from 'react'
import { useTheme } from 'styled-components/native'

import { ScrollViewFaded } from 'src/components/molecules'
import { Header } from 'src/components/organisms'
import { hexToRgba } from 'src/utils'

export default function (): JSX.Element {
  const theme = useTheme()

  return (
    <>
      <Header title="Collections" />
      <ScrollViewFaded
        colors={{
          bottom: [
            hexToRgba(theme.colors.systemBackgroundPrimary, 0),
            theme.colors.systemBackgroundPrimary
          ],
          top: [
            theme.colors.systemBackgroundPrimary,
            hexToRgba(theme.colors.systemBackgroundPrimary, 0)
          ]
        }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: theme.spacing.medium
        }}
        disableTopInset
      />
    </>
  )
}
