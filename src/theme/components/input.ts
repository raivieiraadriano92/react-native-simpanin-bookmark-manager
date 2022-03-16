export const Input = {
  defaultProps: { size: 'md' },
  sizes: {
    md: {
      borderRadius: 'xl',
      h: 10,
      px: 3,
      _text: {
        fontSize: 'sm',
        fontWeight: 'normal'
      }
    }
  },
  variants: {
    filled: (props: any) => ({
      bg: props.colorMode === 'dark' ? 'darkBackgroundSecondary' : 'blueGray.100'
    })
  }
}
