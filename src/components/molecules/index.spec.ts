import * as Molecules from './index'

const keys = [
  'Button',
  'Input',
  'ListItem',
  'RadioGroup',
  'ScrollViewFaded',
  'Section'
]

describe('Molecules', () => {
  it('should have properties', () => {
    expect(Object.keys(Molecules)).toEqual(keys)
  })
})
