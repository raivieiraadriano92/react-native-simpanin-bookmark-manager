import React from 'react'
import { useTheme } from 'styled-components/native'

import { Icon } from 'src/components/atoms'
import { Input, ScrollViewFaded } from 'src/components/molecules'
import { Header } from 'src/components/organisms'
import { useGeneralContext } from 'src/contexts/general'
import { hexToRgba } from 'src/utils'

export default function (): JSX.Element {
  const generalContext = useGeneralContext()

  const theme = useTheme()

  return (
    <>
      <Header title={`Hello, ${generalContext.user?.name}!`} />
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
          paddingHorizontal: theme.spacing.medium
        }}
        disableTopInset
      >
        <Input
          left={iconProps => <Icon.Search {...iconProps} />}
          placeholder="Search your bookmark"
        />
      </ScrollViewFaded>
    </>
  )
}
