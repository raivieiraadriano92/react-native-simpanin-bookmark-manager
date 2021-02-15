import React, { useState } from 'react'
import { useTheme } from 'styled-components/native'
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from 'react-native-reanimated'

import { INPUT_HEIGHT } from 'src/components/molecules/input'

import Categories from './categories'
import Header from './header'
import MyCollections from './my-collections'
import RecentBookmark from './recent-bookmark'
import SearchModal from './search-modal'

export default function (): JSX.Element {
  const [searchModalVisible, setSearchModalVisible] = useState(false)

  const theme = useTheme()

  const [headerHeight, setHeaderHeight] = useState(0)

  const scrollY = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
  })

  return (
    <>
      <Header
        {...{ scrollY }}
        onChangeHeaderHeight={h => setHeaderHeight(h)}
        showSearchModal={() => setSearchModalVisible(true)}
      />
      <Animated.ScrollView
        contentContainerStyle={{
          paddingTop: headerHeight + INPUT_HEIGHT + theme.spacing.large * 2
        }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <Categories />
        <MyCollections />
        <RecentBookmark />
      </Animated.ScrollView>
      <SearchModal
        close={() => setSearchModalVisible(false)}
        visible={searchModalVisible}
      />
    </>
  )
}
