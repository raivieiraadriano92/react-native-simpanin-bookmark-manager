import * as Atoms from './index'

const keys = ['Avatar', 'Flex', 'Icon', 'Line', 'Text']

describe('Atoms', () => {
  it('should have properties', () => {
    expect(Object.keys(Atoms)).toEqual(keys)
  })
})
