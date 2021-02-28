import React, { useState } from 'react'
import { useTheme } from 'styled-components/native'
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from 'react-native-reanimated'

import { INPUT_HEIGHT } from 'src/components/molecules/input'
import { AnimatedHeaderWithSearchBar } from 'src/components/templates'

import List from './list'

export default function (): JSX.Element {
  const theme = useTheme()

  const [headerHeight, setHeaderHeight] = useState(0)

  const scrollY = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
  })

  return (
    <AnimatedHeaderWithSearchBar
      {...{ scrollY }}
      onChangeHeaderHeight={h => setHeaderHeight(h)}
      clearSearch={() => {
        //
      }}
      onSearch={() => {
        //
      }}
      searchBarPlaceholder="Search your bookmark"
      title="Bookmarks"
    >
      <Animated.ScrollView
        contentContainerStyle={{
          paddingTop: headerHeight + INPUT_HEIGHT + theme.spacing.large * 2
        }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <List />
      </Animated.ScrollView>
    </AnimatedHeaderWithSearchBar>
  )
}
