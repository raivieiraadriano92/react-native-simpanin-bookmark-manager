module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src',
          test: './test'
        }
      }
    ],
    'react-native-reanimated/plugin',
    'optional-require'
  ],
  presets: ['module:metro-react-native-babel-preset']
}
