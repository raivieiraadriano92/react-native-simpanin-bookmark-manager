import React, { useState } from 'react'
import { useSharedValue } from 'react-native-reanimated'

import { Flex, Icon } from 'src/components/atoms'
import { AnimatedHeaderWithSearchBar } from 'src/components/templates'

import Sections from './sections'
import * as Styled from './styled'

export default function (): JSX.Element {
  const [headerHeight, setHeaderHeight] = useState(0)
  const [mode, setMode] = useState<'grid' | 'list'>('grid')

  const scrollY = useSharedValue(0)

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
      searchBarPlaceholder="Search your collection"
      title="Collections"
      right={
        <Flex flexDirection="row">
          <Styled.ActionButton
            onPress={() => {
              //
            }}
          >
            <Icon.ICSort />
          </Styled.ActionButton>
          <Styled.ActionButton
            active={mode === 'list'}
            onPress={() => {
              setMode('list')
            }}
          >
            <Icon.Menu />
          </Styled.ActionButton>
          <Styled.ActionButton
            active={mode === 'grid'}
            onPress={() => {
              setMode('grid')
            }}
          >
            <Icon.Apps />
          </Styled.ActionButton>
        </Flex>
      }
    >
      {mode === 'grid' ? (
        <Sections {...{ headerHeight, scrollY }} grid />
      ) : (
        <Sections {...{ headerHeight, scrollY }} />
      )}
    </AnimatedHeaderWithSearchBar>
  )
}
