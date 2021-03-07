import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import Assets from 'src/assets'
import { Avatar, Flex, Icon, Line, Text } from 'src/components/atoms'
import { Input, ScrollViewFaded, Section } from 'src/components/molecules'
import { Header } from 'src/components/organisms'
import { useGeneralContext } from 'src/contexts/general'
import { TabNavigator } from 'src/navigator/logged-navigator/tab-navigator'
import { hexToRgba } from 'src/utils'

export default function (): JSX.Element {
  const generalContext = useGeneralContext()

  const navigation = useNavigation<BottomTabNavigationProp<TabNavigator>>()

  const theme = useTheme()

  return (
    <>
      <Header
        goBack={() => {
          navigation.goBack()
        }}
        title="Edit Profile"
      />
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
        <Flex paddingBottom="large">
          <Avatar source={Assets.images.avatar.source} />
        </Flex>
        <Input
          autoCapitalize="words"
          autoCorrect={false}
          label="Full name"
          placeholder="Type your name"
          value={generalContext.user?.name}
        />
        <Flex paddingBottom="medium" paddingTop="small">
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            label="Email"
            placeholder="Type your email"
            value={generalContext.user?.email}
          />
        </Flex>
        <Section title="Account" titleType="subtitle2">
          <TouchableOpacity
            onPress={() => {
              //
            }}
          >
            <Flex alignItems="center" flexDirection="row">
              <Text flexWrap="wrap" type="body1">
                Free Basic
              </Text>
              <Flex
                paddingHorizontal="small"
                paddingVertical="tiny"
                style={{
                  backgroundColor: hexToRgba(theme.colors.blue, 0.2),
                  borderRadius: 8
                }}
              >
                <Text color="blue" type="body3">
                  Upgrade to PRO
                </Text>
              </Flex>
            </Flex>
          </TouchableOpacity>
          <Flex paddingVertical="small">
            <Line alpha={0.4} />
          </Flex>
          <TouchableOpacity
            onPress={() => {
              //
            }}
          >
            <Text alpha={0.6} type="body3">
              Used space
            </Text>
            <Flex alignItems="center" flexDirection="row" paddingTop="tiny">
              <Flex alignItems="center" flexDirection="row">
                <Text type="body1">3.31 GB</Text>
                <Flex paddingLeft="small">
                  <Text alpha={0.4} type="body3">
                    of 6 GB
                  </Text>
                </Flex>
              </Flex>
              <Flex
                flex
                marginHorizontal="medium"
                style={{
                  backgroundColor: theme.colors.systemBackgroundSecondary,
                  borderRadius: 8,
                  height: 8
                }}
              >
                <Flex
                  style={{
                    backgroundColor: theme.colors.primary,
                    borderRadius: 8,
                    height: 8,
                    width: '70%'
                  }}
                />
              </Flex>
              <Icon.ChevronRight alpha={0.4} size={18} />
            </Flex>
          </TouchableOpacity>
          <Flex paddingVertical="small">
            <Line alpha={0.4} />
          </Flex>
          <Text alpha={0.6} type="body3">
            User ID
          </Text>
          <Flex paddingTop="tiny">
            <Text type="body1">ASDFG1234</Text>
          </Flex>
          <Flex paddingVertical="small">
            <Line alpha={0.4} />
          </Flex>
          <Text alpha={0.6} type="body3">
            Member since
          </Text>
          <Flex paddingTop="tiny">
            <Text type="body1">Jan 1, 2020</Text>
          </Flex>
          <Flex paddingVertical="small">
            <Line alpha={0.4} />
          </Flex>
        </Section>
        <Flex alignItems="center" paddingTop="medium">
          <TouchableOpacity
            onPress={() => {
              //
            }}
          >
            <Text color="error" type="body1">
              Delete Account
            </Text>
          </TouchableOpacity>
        </Flex>
      </ScrollViewFaded>
    </>
  )
}
