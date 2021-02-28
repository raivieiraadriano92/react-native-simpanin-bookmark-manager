import React, { ReactNode, useMemo } from 'react'
import { Image, TouchableOpacity, useWindowDimensions } from 'react-native'
import { useTheme } from 'styled-components/native'
import normalize from 'react-native-normalize'

import { Flex, Icon, Text } from 'src/components/atoms'
import { Props as FlexProps } from 'src/components/atoms/flex'

type Props = Pick<FlexProps, 'alignItems'> & {
  description?: string
  grid?: boolean
  image?: string
  index: number
  label?: string
  onPress(): void
  renderImage?(_: { size: number }): ReactNode
  renderLabel?(): ReactNode
  title: string
}

export default function ({
  alignItems,
  description,
  grid = false,
  image,
  index,
  label,
  onPress,
  renderImage,
  renderLabel,
  title
}: Props): JSX.Element {
  const windowDimensions = useWindowDimensions()

  const theme = useTheme()

  const imageSize = useMemo(
    () =>
      grid
        ? windowDimensions.width / 2 -
          theme.spacing.medium -
          theme.spacing.small
        : 52,
    [grid, theme.spacing.medium, theme.spacing.small, windowDimensions.width]
  )

  return (
    <TouchableOpacity
      {...{ onPress }}
      style={{
        ...(index && !grid
          ? {
              borderTopColor: theme.colors.systemBackgroundSecondary,
              borderTopWidth: 1,
              paddingTop: theme.spacing.small
            }
          : {}),
        marginBottom: theme.spacing.small
      }}
    >
      <Flex {...{ alignItems }} flexDirection={grid ? 'column' : 'row'}>
        {(renderImage || !!image) && (
          <Flex
            {...(grid ? { paddingBottom: 'tiny' } : { paddingRight: 'small' })}
          >
            {!!image && (
              <Image
                source={{
                  uri: image
                }}
                style={{
                  borderRadius: normalize(12),
                  height: imageSize,
                  width: imageSize
                }}
              />
            )}
            {renderImage && renderImage({ size: imageSize })}
          </Flex>
        )}
        <Flex {...{ alignItems }} flex flexDirection="row">
          <Flex flex>
            <Text type="body1">{title}</Text>
            {!!description && (
              <Flex paddingTop="tinyest">
                <Text alpha={0.6} type="body2">
                  {description}
                </Text>
              </Flex>
            )}
            <Flex alignItems="center" flexDirection="row" paddingTop="tinyest">
              {renderLabel && renderLabel()}
              {!!label && (
                <Text alpha={0.4} type="body3">
                  {label}
                </Text>
              )}
            </Flex>
          </Flex>
          <Icon.MoreHorizontal />
        </Flex>
      </Flex>
    </TouchableOpacity>
  )
}
