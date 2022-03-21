module.exports = function (api) {
  api.cache(true)

  return {
    plugins: [
      [
        'inline-dotenv',
        'module-resolver',
        {
          root: ['.'],
          alias: {
            assets: './assets',
            src: './src'
          }
        }
      ],
      // Reanimated plugin has to be the last item in the plugins array
      'react-native-reanimated/plugin'
    ],
    presets: ['babel-preset-expo']
  }
}
