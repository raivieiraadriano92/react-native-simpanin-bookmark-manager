import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { StackNavigationProp } from '@react-navigation/stack'

import Assets from 'src/assets'
import { Avatar, Flex, Icon, Line, Text } from 'src/components/atoms'
import { Button, ScrollViewFaded, Section } from 'src/components/molecules'
import { Header } from 'src/components/organisms'
import { useGeneralContext } from 'src/contexts/general'
import { RootStackNavigator } from 'src/navigator'
import { TabNavigator } from 'src/navigator/tab-navigator'
import { hexToRgba } from 'src/utils'
import normalize from 'react-native-normalize'

export default function (): JSX.Element {
  const generalContext = useGeneralContext()

  const navigation = useNavigation<BottomTabNavigationProp<TabNavigator>>()
  const rootNavigation = navigation.dangerouslyGetParent<
    StackNavigationProp<RootStackNavigator>
  >()

  const theme = useTheme()

  return (
    <>
      <Header title="Settings" />
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
        <Flex alignItems="center" flexDirection="row" paddingBottom="large">
          <Avatar source={Assets.images.avatar.source} />
          <Flex flex paddingLeft="small">
            <Text type="subtitle1">{generalContext.user?.name}</Text>
            <Flex paddingTop="tinyest">
              <Text alpha={0.6} type="body2">
                {generalContext.user?.name}
              </Text>
            </Flex>
          </Flex>
          <TouchableOpacity
            onPress={() => {
              //
            }}
          >
            <Icon.Edit alpha={0.6} color="text" />
          </TouchableOpacity>
        </Flex>
        <Section title="Data" titleType="subtitle2">
          <TouchableOpacity
            onPress={() => {
              //
            }}
          >
            <Flex alignItems="center" flexDirection="row">
              <Flex
                marginRight="small"
                padding="tinyest"
                style={{
                  backgroundColor: hexToRgba(theme.colors.primary, 0.2),
                  borderRadius: normalize(8)
                }}
              >
                <Icon.FolderUpload color="primary" />
              </Flex>
              <Text flexWrap="wrap" type="body1">
                Import / Export
              </Text>
              <Icon.ChevronRight alpha={0.4} size={18} />
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
            <Flex alignItems="center" flexDirection="row">
              <Flex
                marginRight="small"
                padding="tinyest"
                style={{
                  backgroundColor: hexToRgba(theme.colors.primary, 0.2),
                  borderRadius: normalize(8)
                }}
              >
                <Icon.CloudCompleted color="primary" />
              </Flex>
              <Text flexWrap="wrap" type="body1">
                Cloud Backup
              </Text>
              <Icon.ChevronRight alpha={0.4} size={18} />
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
            <Flex alignItems="center" flexDirection="row">
              <Flex
                marginRight="small"
                padding="tinyest"
                style={{
                  backgroundColor: hexToRgba(theme.colors.primary, 0.2),
                  borderRadius: normalize(8)
                }}
              >
                <Icon.PieChart color="primary" />
              </Flex>
              <Text flexWrap="wrap" type="body1">
                Used Space
              </Text>
              <Icon.ChevronRight alpha={0.4} size={18} />
            </Flex>
          </TouchableOpacity>
          <Flex paddingVertical="small">
            <Line alpha={0.4} />
          </Flex>
        </Section>
        <Flex paddingTop="medium">
          <Section title="More" titleType="subtitle2">
            <TouchableOpacity
              onPress={() => {
                //
              }}
            >
              <Flex alignItems="center" flexDirection="row">
                <Flex
                  marginRight="small"
                  padding="tinyest"
                  style={{
                    backgroundColor: hexToRgba(theme.colors.blue, 0.2),
                    borderRadius: normalize(8)
                  }}
                >
                  <Icon.HelpCircle color="blue" />
                </Flex>
                <Text flexWrap="wrap" type="body1">
                  Help
                </Text>
                <Icon.ChevronRight alpha={0.4} size={18} />
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
              <Flex alignItems="center" flexDirection="row">
                <Flex
                  marginRight="small"
                  padding="tinyest"
                  style={{
                    backgroundColor: hexToRgba(theme.colors.blue, 0.2),
                    borderRadius: normalize(8)
                  }}
                >
                  <Icon.FileDocument color="blue" />
                </Flex>
                <Text flexWrap="wrap" type="body1">
                  Terms & Conditions
                </Text>
                <Icon.ChevronRight alpha={0.4} size={18} />
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
              <Flex alignItems="center" flexDirection="row">
                <Flex
                  marginRight="small"
                  padding="tinyest"
                  style={{
                    backgroundColor: hexToRgba(theme.colors.blue, 0.2),
                    borderRadius: normalize(8)
                  }}
                >
                  <Icon.ShieldSafe color="blue" />
                </Flex>
                <Text flexWrap="wrap" type="body1">
                  Privacy & Policy
                </Text>
                <Icon.ChevronRight alpha={0.4} size={18} />
              </Flex>
            </TouchableOpacity>
            <Flex paddingVertical="small">
              <Line alpha={0.4} />
            </Flex>
            <TouchableOpacity onPress={generalContext.toggleDarkMode}>
              <Flex alignItems="center" flexDirection="row">
                <Flex
                  marginRight="small"
                  padding="tinyest"
                  style={{
                    backgroundColor: hexToRgba(theme.colors.blue, 0.2),
                    borderRadius: normalize(8)
                  }}
                >
                  <Icon.ShieldSafe color="blue" />
                </Flex>
                <Text flexWrap="wrap" type="body1">
                  Dark Mode
                </Text>
                <Icon.ChevronRight alpha={0.4} size={18} />
              </Flex>
            </TouchableOpacity>
            <Flex paddingVertical="small">
              <Line alpha={0.4} />
            </Flex>
          </Section>
        </Flex>
        <Flex alignItems="center" paddingTop="medium">
          <TouchableOpacity
            onPress={() => {
              generalContext.logOut()
              rootNavigation.replace('Onboarding')
            }}
          >
            <Text color="error" type="body1">
              Log Out
            </Text>
          </TouchableOpacity>
        </Flex>
      </ScrollViewFaded>
    </>
  )
}
