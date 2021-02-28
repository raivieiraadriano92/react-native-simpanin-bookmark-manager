import React, { PropsWithChildren, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Flex, Icon } from 'src/components/atoms'
import { Input } from 'src/components/molecules'
import Fade from 'src/components/molecules/scrollview-faded/fade'
import { INPUT_HEIGHT } from 'src/components/molecules/input'
import { Header } from 'src/components/organisms'
import { Props as HeaderProps } from 'src/components/organisms/header'

type Props = HeaderProps &
  PropsWithChildren<{
    clearSearch?(): void
    onChangeHeaderHeight(_: number): void
    onSearch?(_: string): void
    scrollY: Animated.SharedValue<number>
    searchBarAsButton?: boolean
    searchBarPlaceholder: string
    showSearchModal?(): void
  }>

export default function ({
  children,
  clearSearch,
  onChangeHeaderHeight,
  onSearch,
  scrollY,
  searchBarAsButton = false,
  searchBarPlaceholder,
  showSearchModal,
  ...props
}: Props): JSX.Element {
  const theme = useTheme()

  const insets = useSafeAreaInsets()

  const [strSearch, setStrSearch] = useState<string>()
  const [headerHeight, setHeaderHeight] = useState(0)

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollY.value,
      [0, headerHeight],
      [1, 0],
      Extrapolate.CLAMP
    ),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [0, headerHeight],
          [0, -headerHeight],
          Extrapolate.CLAMP
        )
      }
    ]
  }))

  const animatedSearchButtonStyle = useAnimatedStyle(() => ({
    height: interpolate(
      scrollY.value,
      [0, headerHeight],
      [
        INPUT_HEIGHT + theme.spacing.large,
        INPUT_HEIGHT + theme.spacing.medium + insets.top
      ],
      Extrapolate.CLAMP
    ),
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [0, headerHeight],
          [0, -headerHeight],
          Extrapolate.CLAMP
        )
      }
    ]
  }))

  return (
    <>
      <Animated.View
        onLayout={e => {
          if (!headerHeight) {
            setHeaderHeight(e.nativeEvent.layout.height)
            onChangeHeaderHeight(e.nativeEvent.layout.height)
          }
        }}
        style={[
          {
            position: 'absolute',
            width: '100%',
            zIndex: 1
          },
          animatedHeaderStyle
        ]}
      >
        <Header {...props} />
      </Animated.View>
      <Animated.View
        style={[
          {
            backgroundColor: theme.colors.systemBackgroundPrimary,
            justifyContent: 'flex-end',
            position: 'absolute',
            width: '100%',
            zIndex: 1,
            top: headerHeight
          },
          animatedSearchButtonStyle
        ]}
      >
        <Flex paddingHorizontal="medium">
          <Input
            {...(searchBarAsButton || !strSearch
              ? {}
              : {
                  right: iconProps => (
                    <TouchableOpacity
                      onPress={() => {
                        clearSearch && clearSearch()
                        setStrSearch(undefined)
                      }}
                    >
                      <Icon.Close {...iconProps} />
                    </TouchableOpacity>
                  )
                })}
            left={iconProps => <Icon.Search {...iconProps} />}
            placeholder={searchBarPlaceholder}
            onChangeText={value => {
              onSearch && onSearch(value)
              setStrSearch(value)
            }}
            value={strSearch}
          />
          {searchBarAsButton && (
            <TouchableOpacity
              onPress={showSearchModal}
              style={{
                backgroundColor: theme.colors.transparent,
                position: 'absolute',
                height: '100%',
                width: '100%'
              }}
            />
          )}
        </Flex>
        <Flex style={{ position: 'absolute', top: '100%', width: '100%' }}>
          <Fade disableInset type="top" />
        </Flex>
      </Animated.View>
      {children}
    </>
  )
}
