import styled from 'styled-components/native'
import normalize from 'react-native-normalize'

export const ActionButton = styled.TouchableOpacity<{
  active?: boolean
}>`
  align-items: center;
  background-color: ${props =>
    props.theme.colors[
      props.active ? 'systemBackgroundSecondary' : 'transparent'
    ]};
  border-radius: ${normalize(8)}px;
  height: ${normalize(28, 'height')}px;
  justify-content: center;
  margin-left: ${props => props.theme.spacing.small}px;
  width: ${normalize(28, 'height')}px;
`
