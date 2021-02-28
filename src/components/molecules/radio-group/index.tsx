import React from 'react'

import { Flex, Icon, Line, Text } from 'src/components/atoms'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Option = {
  label: string
  value: number | string
}

type Props = Pick<Option, 'value'> & {
  onChange(_: Option['value']): void
  options: Option[]
}

export default function ({ onChange, options, value }: Props): JSX.Element {
  return (
    <>
      {options.map((option, index) => (
        <Flex key={option.value}>
          {!!index && (
            <Flex paddingVertical="small">
              <Line alpha={0.3} />
            </Flex>
          )}
          <TouchableOpacity
            onPress={() => {
              onChange(option.value)
            }}
          >
            <Flex alignItems="center" flexDirection="row">
              <Flex paddingRight="small">
                {value === option.value ? (
                  <Icon.ICRadioOn color="primary" size={18} />
                ) : (
                  <Icon.ICRadioOff alpha={0.6} color="text" size={18} />
                )}
              </Flex>
              <Text type="body1">By date</Text>
            </Flex>
          </TouchableOpacity>
        </Flex>
      ))}
    </>
  )
}
