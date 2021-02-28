import React from 'react'
import { SectionList } from 'react-native'
import { useTheme } from 'styled-components/native'
import Animated, { useAnimatedScrollHandler } from 'react-native-reanimated'

import { Flex, Text } from 'src/components/atoms'
import { INPUT_HEIGHT } from 'src/components/molecules/input'

import List from './list'

type Props = {
  grid?: boolean
  headerHeight: number
  scrollY: Animated.SharedValue<number>
}

export default function ({
  grid = false,
  headerHeight,
  scrollY
}: Props): JSX.Element {
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
  })

  const theme = useTheme()

  return (
    <SectionList
      sections={[
        {
          data: [
            {
              count: 32,
              emoji: '🌈',
              id: 1,
              name: 'Inspiration'
            },
            {
              count: 163,
              emoji: '😻',
              id: 2,
              name: 'Catboosters'
            },
            {
              count: 26,
              emoji: '📚',
              id: 3,
              name: 'Brain Foods'
            },
            {
              count: 32,
              emoji: '🌈',
              id: 4,
              name: 'Inspiration'
            },
            {
              count: 163,
              emoji: '😻',
              id: 5,
              name: 'Catboosters'
            },
            {
              count: 26,
              emoji: '📚',
              id: 6,
              name: 'Brain Foods'
            }
          ],
          index: 0,
          title: 'Main Booster'
        },
        {
          data: [
            {
              count: 32,
              emoji: '🌈',
              id: 1,
              name: 'Inspiration'
            },
            {
              count: 163,
              emoji: '😻',
              id: 2,
              name: 'Catboosters'
            },
            {
              count: 26,
              emoji: '📚',
              id: 3,
              name: 'Brain Foods'
            },
            {
              count: 32,
              emoji: '🌈',
              id: 4,
              name: 'Inspiration'
            },
            {
              count: 163,
              emoji: '😻',
              id: 5,
              name: 'Catboosters'
            },
            {
              count: 26,
              emoji: '📚',
              id: 6,
              name: 'Brain Foods'
            }
          ],
          index: 1,
          title: 'Another Saved List'
        }
      ]}
      contentContainerStyle={{
        paddingTop: headerHeight + INPUT_HEIGHT + theme.spacing.large * 2
      }}
      keyExtractor={(item, index) => `${item.id + index}`}
      renderItem={({ index: sectionIndex, section }) =>
        sectionIndex ? null : <List {...{ grid }} data={section.data} />
      }
      renderScrollComponent={scrollComponentProps => (
        <Animated.ScrollView
          {...scrollComponentProps}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        />
      )}
      renderSectionHeader={({ section }) => (
        <Flex
          {...(section.index ? { paddingTop: 'medium' } : {})}
          paddingBottom="small"
          paddingHorizontal="medium"
        >
          <Text type="h4">{section.title}</Text>
        </Flex>
      )}
    />
  )
}
