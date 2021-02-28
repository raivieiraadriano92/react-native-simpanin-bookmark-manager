import React, { useState } from 'react'
import { useSharedValue } from 'react-native-reanimated'

import { Flex, Icon } from 'src/components/atoms'
import { RadioGroup } from 'src/components/molecules'
import { Sheet } from 'src/components/organisms'
import { AnimatedHeaderWithSearchBar } from 'src/components/templates'

import Sections from './sections'
import * as Styled from './styled'

export default function (): JSX.Element {
  const [headerHeight, setHeaderHeight] = useState(0)
  const [showSheetSort, setShowSheetSort] = useState(false)
  const [mode, setMode] = useState<'grid' | 'list'>('list')

  const scrollY = useSharedValue(0)

  return (
    <>
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
                setShowSheetSort(true)
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
      <Sheet
        close={() => {
          setShowSheetSort(false)
        }}
        title="Sort"
        visible={showSheetSort}
      >
        <RadioGroup
          onChange={() => {
            //
          }}
          options={[
            { label: 'By date', value: 1 },
            { label: 'By name A-Z', value: 2 },
            { label: 'By name Z-A', value: 3 }
          ]}
          value={1}
        />
      </Sheet>
    </>
  )
}
