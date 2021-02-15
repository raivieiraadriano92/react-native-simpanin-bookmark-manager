import React, { useMemo } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import normalize from 'react-native-normalize'
import { useTheme } from 'styled-components/native'

import { hexToRgba } from 'src/utils'

type Props = {
  colors?: string[]
  disableInset?: boolean
  type: 'bottom' | 'top'
}

export default function ({
  colors,
  disableInset = false,
  type
}: Props): JSX.Element {
  const insets = useSafeAreaInsets()

  const theme = useTheme()

  const height = useMemo(
    () => normalize(theme.spacing.large) + (disableInset ? 0 : insets[type]),
    [disableInset, insets, theme.spacing.large, type]
  )

  return (
    <LinearGradient
      colors={
        colors ||
        (type === 'bottom'
          ? [
              hexToRgba(theme.colors.systemBackgroundPrimary, 0),
              theme.colors.systemBackgroundPrimary
            ]
          : [
              theme.colors.systemBackgroundPrimary,
              hexToRgba(theme.colors.systemBackgroundPrimary, 0)
            ])
      }
      style={{
        height,
        width: '100%'
      }}
    />
  )
}
