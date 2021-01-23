import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import normalize from 'react-native-normalize'

export const FormContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: flex-end;
  padding: ${props => normalize(props.theme.spacing.large)}px
    ${props => normalize(props.theme.spacing.medium)}px;
`
