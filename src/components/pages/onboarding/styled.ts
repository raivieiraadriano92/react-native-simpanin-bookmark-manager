import { Animated } from 'react-native'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import normalize from 'react-native-normalize'

export const ButtonsContainer = styled(SafeAreaView)`
  background-color: ${props => props.theme.colors.systemBackgroundPrimary};
  border-top-left-radius: ${normalize(18)}px;
  border-top-right-radius: ${normalize(18)}px;
`

export const Indicator = styled(Animated.View)`
  border-radius: ${normalize(6)}px;
  height: ${normalize(6)}px;
  margin-right: ${props => props.theme.spacing.tiny}px;
  width: ${normalize(6)}px;
`

export const OnboardingContainer = styled(SafeAreaView)`
  flex: 1;
`
