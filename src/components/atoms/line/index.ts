import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

import { hexToRgba } from 'src/utils'

export type Props = {
  alpha?: number
  vertical?: boolean
}

export default styled.View<Props>`
  background-color: ${props => hexToRgba(props.theme.colors.text, props.alpha)};
  height: ${props =>
    props.vertical ? '100%' : `${StyleSheet.hairlineWidth}px`};
  width: ${props =>
    props.vertical ? `${StyleSheet.hairlineWidth}px` : '100%'};
`
